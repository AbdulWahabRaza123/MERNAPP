const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const router = express.Router();
const Users = require("../Models/users");
const authenticate = require("../middleware/authenticate");

// router.get("/", (req, res) => {
//   res.send("Hello Home from Router");
// });
router.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, work, password, cPassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cPassword) {
      res.status(422).json({ error: "Error" });
    }
    const registeredUser = await Users.findOne({ email: email });
    if (!registeredUser) {
      if (password === cPassword) {
        const user = await new Users({
          name,
          email,
          phone,
          work,
          password,
          cPassword,
        });

        if (user) {
          //Here we are going to hash the password
          const data = await user.save();
          res.json({ message: "User Registered Successfully" });
        } else {
          res.json({ error: "Error" });
        }
      } else {
        res.json({ error: "Error" });
      }
    } else {
      res.json({ error: "User Already Registered Error" });
    }
  } catch (e) {
    res.json({ error: "Error" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("This is data ", email, " ", password);
    if (!email || !password) {
      res.status(400).json({ error: "Error" });
    }
    const user = await Users.findOne({ email });
    if (user) {
      const matchPassword = await bcrypt.compare(password, user.password);
      const token = await user.generateAuthToken();
      // console.log(token);

      if (matchPassword) {
        return res
          .cookie("jwToken", token, {
            // expiries: new Date(Date().now() + 25892000000),
            httpOnly: true,
          })
          .status(200)
          .json({ message: "User Login Successfully" });
      } else {
        res.status(400).json({ error: "Error" });
      }
    } else {
      res.json({ error: "Error" });
    }
  } catch (e) {
    console.log("Invalid Error Login");
    res.json({ error: "Error" });
  }
});
router.get("/about", authenticate, (req, res) => {
  res.status(200).json(req.rootUser);
});
router.get("/getData", authenticate, (req, res) => {
  res.status(200).json(req.rootUser);
});
router.post("/contact", authenticate, async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log("This is Data ", name, " ", email, " ", phone, " ", message);
  if (!name || !email || !phone || !message) {
    console.log("This is invalid");
    res.status(401).json({ message: "Error" });
  }
  const userContact = await Users.findOne({ _id: req.rootUser._id });
  if (userContact) {
    const userMessage = await userContact.addMessage(
      name,
      email,
      phone,
      message
    );
    if (userMessage) {
      console.log("Message is Sended ");
      res.status(201).json({ message: "Done" });
    } else {
      res.status(400).json({ message: "Error" });
    }
  }
});
router.get("/logout", (req, res) => {
  res.clearCookie("jwToken", { path: "/" });
  res.status(200).json({ message: "Done" });
});
module.exports = router;

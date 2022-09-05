const jwt = require("jsonwebtoken");
const User = require("../Models/users");
const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwToken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

    const rootKey = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootKey) {
      throw new Error("Error");
    }
    req.rootUser = rootKey;
    next();
  } catch (e) {
    console.log("There is error authenticate");
    res.status(401).json({ error: "Error" });
  }
};
module.exports = authenticate;

const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const existingUser = await Admin.findOne({ email });
  if (existingUser) {
    return res.status(400).send("Email already in use");
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new Admin({ username, email, password: hashedPassword });
    await user.save();
    res.json("registration successful");
  } catch (err) {
    console.log(err);
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.status(404).send("no user found with this email");
    }
    if (await bcrypt.compare(password, user.password)) {
      return res.status(401).send("invalid password");
    }
    const token = jwt.sign({ userid: user._id }, "one", { expiresIn: "1h" });
    res.json(user, token);
  } catch (err) {
    return res.status(500).send(err);
  }
};

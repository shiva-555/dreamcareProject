const User = require("../Models/userModel");
const Complaint = require("../Models/complaintModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(404).json({ message: "user not found", data: {} });
    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result) return res.status(404).json({ message: "Incorrect username or password", data: {} });
    const token = await jwt.sign({ id: user._id.toString() }, "token-secret");
    return res.status(200).json({ message: "logged in successfully", data: { user, token } });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal Server Error", data: {} });
  }
};

exports.signUp = async (req, res) => {
  try {
    const { username, policeStation, role, password: userPassword } = req.body;
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(userPassword, salt, async function (err, hash) {
        const user = await User.create({
          username,
          policeStation,
          role,
          password: hash,
        });
        return res.status(201).json({ message: "user created successfully", data: { user } });
      });
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal Server Error", data: {} });
  }
};

exports.getComplaints = async (req, res) => {
  try {
    const user = await User.findById(req.query.userId);
    if (!user) return res.status(404).json({ message: "user not found", data: {} });
    let complaints;
    if (user.role === "Admin") {
      let searchCriteria = {};
      if (req.query.search) {
        searchCriteria.tenanatName = req.query.search;
      }
      complaints = await Complaint.find(searchCriteria);
    } else {
      let searchCriteria = {
        policeStation: user.policeStation,
      };
      if (req.query.search) {
        searchCriteria.tenanatName = req.query.search;
      }
      complaints = await Complaint.find(searchCriteria);
    }
    return res.status(200).json({ message: "fetched successfully", data: { complaints } });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal Server Error", data: {} });
  }
};

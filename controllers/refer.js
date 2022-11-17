const { default: mongoose } = require("mongoose");
const Refer = require("../models/userSchema");

exports.createUser = async (req, res) => {
  const { name, email, ReferredUser, totalEarnings } = req.body;
  const data = new Refer({
    name: name,
    email: email,
    isPaymentMade: false,
    ReferredUser: ReferredUser,
    totalEarnings: totalEarnings,
  });
  await data.save();
  res.send("User Created");
};

exports.ReferredUser = async (req, res) => {
  let refer = await Refer.findById(req.body.userId)
  await Refer.findByIdAndUpdate(req.body.userId,{"isPaymentMade":true})
  await Refer.findByIdAndUpdate(refer.ReferredUser, { $inc: { totalEarnings: 10 }})
  res.send("refered Successfully")
};


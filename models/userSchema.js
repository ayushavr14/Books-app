const mongoose = require("mongoose");

const ReferSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  ReferredUser:{
    type:mongoose.Schema.Types.ObjectId,
    required:false
  },
  isPaymentMade: {
    type: Boolean,
    required: true,
  },
  totalEarnings: {
    type: Number,
  },
});

const Refer = new mongoose.model("refer", ReferSchema);

module.exports = Refer;

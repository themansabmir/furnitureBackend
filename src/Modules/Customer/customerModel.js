const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String, 
    default: '' 
},
  phoneNumber: {
    type: String,
    required: true,
  },
  currentAddress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
  },
  homeAddress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isDelete:{
    type: Boolean , 
    default: false 
  }
  
}, {
  timestamps: true
});

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
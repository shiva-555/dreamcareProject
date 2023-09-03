const mongoose = require("mongoose");

const tenantInformation = new mongoose.Schema(
  {
    policeStation: {
      type: String,
    },

    propertyOwnerphoto: {
      type: String,
    },
    fullNamepropertyowner: {
      type: String,
    },

    mobileNumberPropertyowner: {
      type: String,
    },

    emailIdpropertyowner: {
      type: String,
    },

    addressPropetyowner: {
      type: String,
    },

    cityDistrictPropertyowner: {
      type: String,
    },

    statePropertyowner: {
      type: String,
    },

    pinCode: {
      type: String,
    },

    tenanatName: {
      type: String,
    },

    tenantPhoto: {
      type: String,
    },

    tenanatAddress: {
      type: String,
    },

    tenanatcityDistrict: {
      type: String,
    },

    tenanatsTate: {
      type: String,
    },

    identiproofTenant: {
      type: String,
    },

    tenantIdproofNum: {
      type: String,
    },

    tenanatpinCode: {
      type: String,
    },

    tenanatWorkmobileNumber: {
      type: String,
    },

    tenantworkemailId: {
      type: String,
    },

    tenanatOccupation: {
      type: String,
    },

    tenanatworkAddress: {
      type: String,
    },

    tenanatworkcityDistrict: {
      type: String,
    },

    tenanatworksTate: {
      type: String,
    },

    tenanatworkcityDistrict: {
      type: String,
    },

    tenanatworksTate: {
      type: String,
    },

    tenanatworkpinCode: {
      type: String,
    },

    personKnowing1name: {
      type: String,
    },

    personknowing1contact: {
      type: Number,
    },

    personKnowing2name: {
      type: String,
    },

    personknowing2contact: {
      type: Number,
    },

    agentName: {
      type: String,
    },
    agentDetails: {
      type: String,
    },

    agentName: {
      type: String,
    },
    agentDetails: {
      type: String,
    },

    otp: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tenant", tenantInformation);

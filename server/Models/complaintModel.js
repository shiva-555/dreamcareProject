const mongoose = require('mongoose');

const tenantInformation = new mongoose.Schema({
    policeStation: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    propertyOwnerphoto: {
        type: String,
        required: true,
        trim : true

    },
    fullNamepropertyowner: {
        type:String,
        required: true,
        unique: true,
        lowercase : true
      
    },

    mobileNumberPropertyowner: {
        type:String,
        required: true,
        unique: true,
        lowercase : true
      
    },

    emailIdpropertyowner: {
        type:String,
        required: true,
        unique: true,
        lowercase : true
      
    },

    addressPropetyowner: {
        type:String,
        required: true,
        unique: true,
        lowercase : true
      
    },

    cityDistrictPropertyowner: {
        type:String,
        required: true,
        unique: true,
        lowercase : true
      
    },

    statePropertyowner: {
        type:String,
        required: true,
        unique: true,
        lowercase : true
      
    },

    pinCode: {
        type:String,
        required: true,
        unique: true,
        lowercase : true
      
    },

    tenanatName: {
        type:String,
        required: true,
        unique: true,
        lowercase : true
      
    },

    tenantPhoto: {
        type:String,
        required: true,
        unique: true,
        lowercase : true
      
    },

    tenanatAddress: {
        type:String,
        required: true,
        lowercase : true
      
    },

    tenanatcityDistrict: {
        type:String,
        required: true, 
        lowercase : true
      
    },

    
    tenanatsTate: {
        type:String,
        required: true,
        lowercase : true
      
    },

    identiproofTenant: {
        type:String,
        required: true, 
        lowercase : true
      
    },

    tenantIdproofNum: {
        type:String,
        required: true,
        lowercase : true
      
    },

    tenanatpinCode: {
        type:String,
        required: true, 
        lowercase : true
      
    },

    
    tenanatWorkmobileNumber: {
        type:String,
        required: true,
        lowercase : true
      
    },

    tenantworkemailId: {
        type:String,
        required: true, 
        lowercase : true
      
    },

       
    tenanatOccupation: {
        type:String,
        required: true,
        lowercase : true
      
    },

    tenanatworkAddress: {
        type:String,
        required: true, 
        lowercase : true
      
    },

    tenanatworkcityDistrict: {
        type:String,
        required: true,
        lowercase : true
      
    },

    tenanatworksTate: {
        type:String,
        required: true, 
        lowercase : true
      
    },

    tenanatworkcityDistrict: {
        type:String,
        required: true,
        lowercase : true
      
    },

    tenanatworksTate: {
        type:String,
        required: true, 
        lowercase : true
      
    },

    tenanatworkpinCode: {
        type:String,
        required: true, 
        lowercase : true
      
    },

    personKnowing1name: {
        type:String,
        required: true, 
        lowercase : true
      
    },

    personknowing1contact: {
        type:Number,
        required: true, 
        lowercase : true
      
    },

    personKnowing2name: {
        type:String,
        required: true, 
        lowercase : true
      
    },

    personknowing2contact: {
        type:Number,
        required: true, 
        lowercase : true
      
    },

    agentName: {
        type:String,
        required: true, 
        lowercase : true
      
    },
    agentDetails: {
        type:String,
        required: true, 
        lowercase : true
      
    },

    agentName: {
        type:String,
        required: true, 
        lowercase : true
      
    },
    agentDetails: {
        type:String,
        required: true, 
        lowercase : true
      
    },

    otp: {
        type:String,
        required: true, 
        lowercase : true
      
    }
}, { timestamps: true })

module.exports = mongoose.model('tenant', tenantInformation)
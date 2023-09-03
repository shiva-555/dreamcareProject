const express = require('express');
const complaintModel = require("../Models/complaintModel");

const createPolicecomplaint = async (req, res) => {
  console.log(req.body);
  try {
    const data = await complaintModel.create(req.body);
    return res.status(201).send({ status: true, data: data });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.message });
  }
};

module.exports.createPolicecomplaint = createPolicecomplaint;

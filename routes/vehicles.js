const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Vehicle = require("../models/Vehicle");

router.get("/", (req, res) =>
  Vehicle.findAll()
    .then((vehicles) => {
      console.log(vehicles);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err))
);

module.exports = router;

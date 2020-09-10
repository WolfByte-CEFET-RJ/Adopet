const express = require("express");
const bodyParser = require("body-parser");
const connection = require('./../models/connection')

const router = express.Router();

router.route("/").get( async (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;

  let data = await connection('chat').where({message: "Anonymous"})

  const messages = await connection('chat').select("*")

  res.json(messages)

  // connectdb.then(db => {
  //   let data = Chats.find({ message: "Anonymous" });
  //   Chats.find({}).then(chat => {
  //     res.json(chat);
  //   });
  // });
});

module.exports = router;

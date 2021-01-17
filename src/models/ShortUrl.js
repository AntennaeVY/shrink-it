const { Schema, model } = require("mongoose");
const shortid = require("shortid");

const ShortUrlSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    default: shortid.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = model("ShortUrl", ShortUrlSchema);

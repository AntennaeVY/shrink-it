const ShortUrl = require("../models/ShortUrl");

exports.getRoot = async (req, res) => {
  const allurls = await ShortUrl.find();
  res.render("index", { allurls: allurls.reverse() });
};

exports.postShrinkIt = async (req, res) => {
  const result = await ShortUrl.find({
    $or: [{ name: req.body.name }, { userUrl: req.body.userUrl }],
  });

  if (result.length === 0) {
    await ShortUrl.create({ name: req.body.name, userUrl: req.body.userUrl });
    res.redirect("/");
  } else {
    res.send("Name or URL already in use");
  }
};

exports.getShortUrl = async (req, res) => {
  const result = await ShortUrl.findOne({ shortUrl: req.params.id });

  if (result === null) {
    res.redirect("/404");
  } else {
    result.clicks++;
    result.save();
    res.redirect(result.userUrl);
  }
};

exports.get404 = (req, res) => {
  res.render("404");
};

exports.getDefault = (req, res) => {
  res.redirect("/404");
};

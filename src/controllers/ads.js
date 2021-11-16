const Ad = require("../models/Ad");

/**
 * Create a new ad record
 * @param {string} req.body.title - title of ad
 * @param {string} req.body.link - link url to the title.
 * @param {date} req.body.valid_until - ads valid date
 */
exports.createAd = async (req, res) => {
  const ad = new Ad({
    title: req.body.title,
    link: req.body.link,
    valid_until: req.body.valid_until,
  });
  try {
    await ad.save();
    return res.status(201).send(ad);
  } catch (e) {
    return res.status(400).send(e);
  }
};

/**
 * Get an existing ad record
 * @param {id} req.params.id - id of the ad
 */
exports.getAd = async (req, res) => {
  const _id = req.params.id;
  try {
    const ad = await Ad.findOne({ _id });
    if (!ad) return res.status(404).send();
    return res.send(ad);
  } catch (e) {
    return res.status(400).send(e);
  }
};

/**
 * Get an array of existing ad records
 */
exports.getAds = async (req, res) => {
  try {
    const ad = await Ad.find({}).sort({ _id: -1 });
    if (!ad) res.status(404).send();
    return res.send(ad);
  } catch (e) {
    return res.status(400).send(e);
  }
};

/**
 * Update an existing ad record
 * @param {id} req.params.id - id of the ad
 * @param {string} req.body.title - title of ad
 * @param {string} req.body.link - link url to the title.
 * @param {date} req.body.valid_until - ads valid date
 */
exports.updateAd = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["title", "link", "valid_until"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }
  try {
    const ad = await Ad.findOne({
      _id: req.params.id,
    });

    if (!ad) {
      return res.status(404).send();
    }
    updates.forEach((update) => (ad[update] = req.body[update]));
    await ad.save();
    return res.send(ad);
  } catch (e) {
    return res.status(400).send(e);
  }
};

exports.deleteAd = async (req, res) => {
  try {
    // const task = await Task.findByIdAndDelete(req.params.id)
    const ad = await Ad.findOneAndDelete({
      _id: req.params.id,
    });
    if (!ad) return res.status(404).send();
    return res.send(ad);
  } catch (e) {
    return res.status(400).send(e);
  }
};

const express = require("express");
const router = express.Router();
const ads = require("../controllers/ads");

router.post("/ads", ads.createAd);
router.get("/ads/:id", ads.getAd);
router.get("/ads", ads.getAds);
router.delete("/ads/:id", ads.deleteAd);
router.put("/ads/:id", ads.updateAd);
module.exports = router;

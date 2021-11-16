const express = require("express");
const router = express.Router();
const ads = require("../controllers/ads");
const validateAds = require("../middleware/adsValidator");

router.post("/ads", validateAds.validateCreateAd, ads.createAd);
router.get("/ads/:id", validateAds.validateId, ads.getAd);
router.get("/ads", ads.getAds);
router.delete("/ads/:id", validateAds.validateId, ads.deleteAd);
router.put("/ads/:id", validateAds.validateUpdateAd, ads.updateAd);
module.exports = router;

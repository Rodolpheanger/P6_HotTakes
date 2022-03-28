const express = require("express");
const router = express.Router();
const requestDataChecker = require("../middleware/data-checker");

const sauceCtrl = require("../controllers/sauces");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/", auth, sauceCtrl.getAllSauces);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.post(
  "/",
  auth,
  multer,
  requestDataChecker.checkSauceData,
  sauceCtrl.createSauce
);
router.put(
  "/:id",
  auth,
  multer,
  requestDataChecker.checkSauceData,
  sauceCtrl.modifySauce
);
router.delete("/:id", auth, sauceCtrl.deleteSauce);
router.post(
  "/:id/like",
  auth,
  requestDataChecker.checkLikeData,
  sauceCtrl.likeOrDislikeSauce
);

module.exports = router;

const express = require("express");
const userController = require("../controllers/user.controller");
const authRequired = require("../middlewares/authRequire");
const router = express.Router();

// [GET]   /api/user/profile
router.get("/profile", authRequired, userController.getProfile);
// [PUT]   /api/user/profile
router.put("/profile", authRequired, userController.updateProfile);
// [PATCH] /api/user/change-password
router.patch("/change-password", authRequired, userController.changePassword);
// [POST]  /api/user/avatar
router.post("/avatar", authRequired, userController.updateAvatar);

module.exports = router;

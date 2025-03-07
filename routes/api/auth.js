const express = require("express");

const router = express.Router();

const { auth: ctrl } = require("../../controllers");

const { ctrlWrapper } = require("../../helpers");

const { auth, validation, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

// signup
router.post(
  "/register",
  validation(schemas.registerUser),
  ctrlWrapper(ctrl.register)
);

router.post(
  "/verify",
  validation(schemas.verifyEmail),
  ctrlWrapper(ctrl.resendVerifyEmail)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

// signin
router.post("/login", validation(schemas.loginUser), ctrlWrapper(ctrl.login));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.patch(
  "/",
  auth,
  validation(schemas.updateSubscription),
  ctrlWrapper(ctrl.updateSubscription)
);

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

// signout
router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;

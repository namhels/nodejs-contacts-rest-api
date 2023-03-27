const express = require("express");

const { contacts: ctrl } = require("../../controllers");

const { ctrlWrapper } = require("../../helpers");

const { auth, validation, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:id", auth, isValidId, ctrlWrapper(ctrl.getById));

router.post("/", auth, validation(schemas.addContact), ctrlWrapper(ctrl.add));

router.put(
  "/:id",
  auth,
  isValidId,
  validation(schemas.addContact),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:id/favorite",
  auth,
  isValidId,
  validation(schemas.updateFavorite),
  ctrlWrapper(ctrl.updateFavorite)
);

router.delete("/:id", auth, ctrlWrapper(ctrl.removeById));

module.exports = router;

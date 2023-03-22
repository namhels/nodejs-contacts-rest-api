const express = require("express");

const { contacts: ctrl } = require("../../controllers");

const { ctrlWrapper } = require("../../helpers");

const { validation } = require("../../middlewares");

const { joiSchema } = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", validation(joiSchema), ctrlWrapper(ctrl.add));

router.put("/:id", validation(joiSchema), ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;

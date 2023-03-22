const contacts = require("../../models/contacts");

const { createError } = require("../../helpers");

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) {
    throw createError(404);
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = removeById;

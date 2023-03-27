const { Contact } = require("../../models/contact");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const owner = { owner: _id };
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  if (favorite === "true") {
    owner.favorite = true;
  }
  const result = await Contact.find(owner, "-createdAt -updatedAt", {
    skip,
    limit: Number(limit),
  }).populate("owner", "email");

  res.json(result);
};

module.exports = getAll;

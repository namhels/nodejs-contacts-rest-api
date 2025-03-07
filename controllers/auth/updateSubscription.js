const { User } = require("../../models/user");

const { createError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body, { new: true });
  if (!result) {
    throw createError(400, "missing field subscription");
  }
  res.json(result);
};

module.exports = updateSubscription;

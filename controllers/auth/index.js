const register = require("./register");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");
const login = require("./login");
const getCurrent = require("./getCurrent");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const logout = require("./logout");

module.exports = {
  register,
  verifyEmail,
  resendVerifyEmail,
  login,
  getCurrent,
  updateSubscription,
  updateAvatar,
  logout,
};

const userService = require("../services/user.service");

const getProfile = async (req, res) => {
  try {
    const user = req.auth.user;
    res.success(user);
  } catch (error) {
    res.error(error.message);
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.auth.user.id;
    const { fullName, username, phone, dateOfBirth } = req.body;
    const updated = await userService.updateProfile(userId, {
      fullName,
      username,
      phone,
      dateOfBirth,
    });
    res.success(updated);
  } catch (error) {
    res.error(error.message);
  }
};

const changePassword = async (req, res) => {
  try {
    const userId = req.auth.user.id;
    const { currentPassword, newPassword } = req.body;
    await userService.changePassword(userId, currentPassword, newPassword);
    res.success({ message: "Đổi mật khẩu thành công" });
  } catch (error) {
    res.error(error.message);
  }
};

const updateAvatar = async (req, res) => {
  try {
    const userId = req.auth.user.id;
    const { avatar } = req.body;
    const updated = await userService.updateAvatar(userId, avatar);
    res.success(updated);
  } catch (error) {
    res.error(error.message);
  }
};

module.exports = { getProfile, updateProfile, changePassword, updateAvatar };

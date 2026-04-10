const prisma = require("../lib/prisma");
const bcrypt = require("bcrypt");

const updateProfile = async (
  userId,
  { fullName, username, phone, dateOfBirth },
) => {
  return prisma.user.update({
    where: { id: userId },
    data: {
      fullName,
      username,
      phone,
      dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
    },
  });
};

const changePassword = async (userId, currentPassword, newPassword) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  
  if (!user) {
    throw new Error("Không tìm thấy người dùng");
  }

  const isValid = await bcrypt.compare(currentPassword, user.password);

  if (!isValid) {
    throw new Error("Mật khẩu hiện tại không đúng");
  }

  const hashed = await bcrypt.hash(newPassword, 10);

  await prisma.user.update({
    where: { id: userId },
    data: { password: hashed },
  });
};

const updateAvatar = async (userId, avatar) => {
  return prisma.user.update({
    where: { id: userId },
    data: { avatar },
  });
};

module.exports = { updateProfile, changePassword, updateAvatar };

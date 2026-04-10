const emailService = require("../service/email.service");

async function sendVerifyEmailTask(payload) {
  await emailService.sendVerifyEmail(payload);
}

module.exports = sendVerifyEmailTask;

function adminRequired(req, res, next) {
  const user = req.auth?.user;

  if (!user) {
    return res.unauthorized();
  }

  if (user.role !== "ADMIN") {
    return res.forbidden();
  }

  next();
}

module.exports = adminRequired;

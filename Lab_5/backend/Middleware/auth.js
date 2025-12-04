function auth(req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect("/not-authorized");
  }
}

module.exports = auth;
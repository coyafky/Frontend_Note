exports.list = async (req, res, next) => {
  console.log(req.method);
  // JSON.parse('(')
  res.send("/video-list");
};

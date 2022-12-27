const { validationResult } = require("express-validator");

//Validation Checkにエラーが吐かれた場合のエラー処理
exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // next()は次の処理への意味で、ミドルウェアを挿入する際にはnextを入れる必要がある
  next();
};

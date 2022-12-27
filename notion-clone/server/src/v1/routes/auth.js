//認証用API
const router = require("express").Router();
const { body } = require("express-validator");
const User = require("../models/user");
const validation = require("../handlers/validation");
const userController = require("../controllers/user");
const tokenHandler = require("../handlers/tokenHandler");

//ユーザー新規登録用API
router.post(
  "/register",
  body("username")
    .isLength({ min: 2 })
    .withMessage("ユーザー名は2文字以上である必要があります。"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("パスワードは6文字以上である必要があります。"),
  body("confirmPassword")
    .isLength({ min: 6 })
    .withMessage("確認用パスワードは6文字以上である必要があります。"),
  body("username").custom((value) => {
    return User.findOne({ username: value }).then((user) => {
      if (user) {
        return Promise.reject("このユーザー名はすでに使われています。");
      }
    });
  }),
  validation.validate,
  userController.register
);

//ログイン用API
router.post(
  "/login",
  body("username")
    .isLength({ min: 6 })
    .withMessage("ユーザー名は6文字以上である必要があります。"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("パスワードは6文字以上である必要があります。"),
  validation.validate,
  userController.login
);

// JWT認証API(ミドルウェアを挿入しないと、このAPIを叩いただけで勝ってにJWT認証されてしまう)
router.post("/verify-token", tokenHandler.verifyToken, (req, res, next) => {
  return res.status(200).json({ user: req.user });
});

module.exports = router;

const JWT = require("jsonwebtoken");
const User = require("../models/user");

// クライアントから渡されたJWTが正常か検証
const tokenDecode = (req) => {
  // クライアントから渡されるリクエストヘッー内のauthorizationを見ている
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    // tokenを取得
    const bearer = bearerHeader.split(" ")[1];
    try {
      // verify関数でJWTをdecodeする
      const decodedToken = JWT.verify(bearer, process.env.TOKEN_SECRET_KEY);
      return decodedToken;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

// JWT認証を検証するためのミドルウェア
exports.verifyToken = async (req, res, next) => {
  const tokenDecoded = tokenDecode(req);
  if (tokenDecoded) {
    // token(bearer)があるならそのJWTと一致するユーザーを探す
    // JWTを発行した際にuserIdで発行したので、一致するユーザーを探す際にもfindByIdで探す
    const user = await User.findById(tokenDecoded.id);
    if (!user) {
      return res.status(401).json("権限がありません");
    }
    // 一致するユーザーが存在していた場合、reqで渡ってきたuserをそのまま返す
    req.user = user;
    next();
  } else {
    return res.status(401).json("権限がありません");
  }
};

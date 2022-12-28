import axios from "axios";
// カスタムヘッダー
const BASE_URL = "http://localhost:3000/api/v1";
// JWTはlocal storageで保管されるので、localStorage.getItemで取り出す
const getToken = () => localStorage.getItem("token");

// APIを叩くためにaxiosライブラリaxiosを使用
const axiosClient = axios.create({
  baseURL: BASE_URL,
});

// APIを叩く前の前処理
axiosClient.interceptors.request.use(async (config) => {
  return {
    config,
    header: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`, //リクエストヘッダーにJWTをつけてサーバーに渡す
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error.response;
  }
);

export default axiosClient;

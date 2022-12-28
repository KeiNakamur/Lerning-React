import axiosClient from "./axiosClient";

const authApi = {
  register: (params) => axiosClient.post("auth/register", params),
};

export default authApi;

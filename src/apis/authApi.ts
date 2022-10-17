import { request } from "apis/baseRequest";

export const authApi = {
  login: (email: string, password: string) => {
    return request({
      url: "/auth/v1/login",
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    });
  },
};

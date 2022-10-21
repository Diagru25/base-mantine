import { request } from "apis/baseRequest";
import { LoginData } from "constants/types/auth";

export const authApi = {
  login: (data: LoginData) => {
    return request({
      url: "/auth/v1/login",
      method: "POST",
      data,
    });
  },
  checkSession: () => {
    return request({
      url: "/auth/v1/check_session",
      method: "GET",
    });
  },
  test: () => {
    return request({
      url: "/admin/v1/statistics/members",
      method: "GET",
    });
  },
};

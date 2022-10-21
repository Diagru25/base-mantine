import { setupInterceptorsTo } from "apis/interceptors";
import axios from "axios";

const instance = setupInterceptorsTo(
  axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || "",
    timeout: 3600,
  })
);

const setRequestParams = (url: string, params: any): string => {
  if (typeof params === "object" && params !== null) {
    const keyParams = Object.keys(params);
    const arrayParams = [];
    for (const key of keyParams) {
      const param = key + "=" + params[key];
      arrayParams.push(param);
    }
    if (Array.isArray(arrayParams) && arrayParams.length) {
      url = url + "?" + arrayParams.join("&");
    }
  }
  return url;
};

interface RequestProps {
  method: string;
  url: string;
  data?: any;
  params?: any;
  headers?: any;
}

export const request = (obj: RequestProps): Promise<any> => {
  const { method, url, data, params, headers } = obj;
  return new Promise((resolve, reject) => {
    const _url = setRequestParams(url, params);

    instance({
      method,
      url: _url,
      data,
      headers,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default instance;

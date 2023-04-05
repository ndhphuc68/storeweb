import axios from "axios";
import { Config } from "../configs";
import { is, curryN, gte } from "ramda";
import qs from "qs";

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number);
  return (
    isNumber(min) &&
    isNumber(max) &&
    isNumber(value) &&
    gte(value, min) &&
    gte(max, value)
  );
});
const in200s = isWithin(200, 299);

const axiosDefault = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 6000,
});

async function addToken() {
  const token = localStorage.getItem("token");
  const bearer = token ? `Bearer ${token}` : "";
  axiosDefault.defaults.headers.common["Authorization"] = bearer;
}

async function get(url, isNeedToken, params) {
  console.log(url);
  try {
    if (isNeedToken) {
      await addToken();
    }
    const response = await axiosDefault.get(url);
    if (in200s(response.status)) {
      return response.data;
    }
    return response;
  } catch (error) {
    return { status: 500, success: false, message: "Error" };
  }
}

async function post(url, data, isNeedToken, isPostForm) {
  try {
    if (isNeedToken) {
      await addToken();
    }
    if (isPostForm) {
      axiosDefault.defaults.headers.common["Content-Type"] =
        "multipart/form-data";
    }
    const response = await axiosDefault.post(url, data);
    if (in200s(response.status)) {
      return response.data;
    }
    return response;
  } catch (error) {
    return { status: 500, success: false, message: "Error" };
  }
}

export const Api = {
  get,
  post,
};

import { Api } from "../api";

function create(data) {
  return Api.post("/register", data, true);
}

function login(data) {
  return Api.post("/login", data, true);
}

export const Authorization = {
  create,
  login,
};

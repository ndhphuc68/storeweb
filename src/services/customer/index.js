import { Api } from "../api";

function profile(id) {
  return Api.get(`/customer/profile/${id}`, true);
}

export const Customers = {
  profile,
};
 
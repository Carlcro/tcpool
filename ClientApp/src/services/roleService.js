import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/roles";

function roleUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getRoles() {
  return http.get(apiEndpoint);
}

export function getRole(roleId) {
  return http.get(roleUrl(roleId));
}

export function saveRole(role) {
  if (role.id) {
    const body = { ...role };
    delete body.id;
    return http.put(roleUrl(role.id), body);
  }

  return http.post(apiEndpoint, role);
}

export function deleteRole(roleId) {
  return http.delete(roleUrl(roleId));
}

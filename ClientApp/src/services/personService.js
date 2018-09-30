import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/persons";

function personUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getPersons() {
  return http.get(apiEndpoint);
}

export function getPerson(personId) {
  return http.get(personUrl(personId));
}

export function savePerson(person) {
  if (person.id) {
    const body = { ...person };
    delete body.id;
    return http.put(personUrl(person.id), body);
  }

  return http.post(apiEndpoint, person);
}

export function deletePerson(personId) {
  return http.delete(personUrl(personId));
}

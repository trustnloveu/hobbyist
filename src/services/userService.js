import http from "./httpService";

const apiEndpoint = "/users";

// export function getUserInfo(userData) {
//   return http.get(apiEndpoint, {
//     id: userData.id,
//   });
// }

// sign-up
export function registerUser(userData) {
  return http.post(apiEndpoint, {
    email: userData.email,
    password: userData.password,
    name: userData.name,
    phone: userData.phone,
  });
}

import http from "./httpService";

const apiEndpoint = "/users";

// getUserInfo >>> its functionality is replaced with JSON webtoken stored in local-storage
// export function getUserInfo(userData) {
//   return http.get(apiEndpoint, {
//     id: userData.id,
//   });
// }

// get user data
export function getUserInfo() {
  return http.get(`${apiEndpoint}/myPage`);
}

// sign-up
export function registerUser(userData) {
  return http.post(apiEndpoint, {
    email: userData.email,
    password: userData.password,
    name: userData.name,
    phone: userData.phone,
  });
}

// create new group > manager role
export function createNewGroup(data) {
  return http.put(`${apiEndpoint}/createNewGroup/${data.groupId}`, {
    userId: data.userId,
  });
}

// join new group > member role
export function joinNewGroup(groupId) {
  return http.put(apiEndpoint, {
    groupId: groupId,
  });
}

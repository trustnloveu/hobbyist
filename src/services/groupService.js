import http from "./httpService";
import auth from "./authService";

const apiEndpoint = "/groups";

// GET all
export function getGroups() {
  return http.get(apiEndpoint);
}

// GET some with filter
export function getGroupsByCategory(categoryId) {
  return http.get(`${apiEndpoint}/${categoryId}`);
}

// GET one by ID
export function getGroup(groupId) {
  return http.get(`${apiEndpoint}/group/${groupId}`);
}

// POST
export function createNewGroup(groupData) {
  return http.post(apiEndpoint, {
    title: groupData.title,
    userId: groupData.userId,
    categoryId: groupData.categoryId,
    location: groupData.location,
    address: groupData.mainAddress + ", " + groupData.detailAddress,
    description: groupData.description,
    startTime: groupData.startTime,
    meetingDate: groupData.meetingDate,
    keywords: groupData.keywords,
    coverImage: groupData.coverImage,
  });
}

// PUT (join new group)
export function joinNewGroup(groupId) {
  return http.put(`${apiEndpoint}/joinNewGroup/${groupId}`, {
    userId: auth.getCurrentUser()._id,
    request: "join",
  });
}

// PUT (sign-out group)
export function signOutGroup(groupId) {
  return http.put(`${apiEndpoint}/signOutGroup/${groupId}`, {
    userId: auth.getCurrentUser()._id,
    request: "signOut",
  });
}

// DELETE (dismiss group)
// export function signOutGroup(groupId) {
//   return http.put(`${apiEndpoint}/signOutGroup/${groupId}`, {
//     userId: auth.getCurrentUser()._id,
//   });
// }

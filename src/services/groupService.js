import http from "./httpService";
import auth from "./authService";

const apiEndpoin = "/groups";

// GET all
export function getGroups() {
  return http.get(apiEndpoin);
}

// GET some with filter
export function getGroupsByCategory(categoryId) {
  return http.get(`${apiEndpoin}/${categoryId}`);
}

// GET one by ID
export function getGroup(groupId) {
  return http.get(`${apiEndpoin}/group/${groupId}`);
}

// POST
export function createNewGroup(groupData) {
  return http.post(apiEndpoin, {
    title: groupData.title,
    userId: groupData.userId,
    categoryId: groupData.categoryId,
    location: groupData.location,
    description: groupData.description,
    startTime: groupData.startTime,
    meetingDate: groupData.meetingDate,
    keywords: groupData.keywords,
    coverImage: groupData.coverImage,
  });
}

// PUT (join new group)
export function joinNewGroup(groupId) {
  return http.put(apiEndpoin, {
    userId: auth.getCurrentUser()._id,
    groupId: groupId,
  });
}

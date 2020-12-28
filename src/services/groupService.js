import http from "./httpService";

const apiEndpoin = "/groups";

// GET all
export function getGroups() {
  return http.get(apiEndpoin);
}

// GET some with filter
export function getGroupsByCategory(categoryId) {
  return http.get(`${apiEndpoin}/${categoryId}`);
}

// POST
export function createNewGroup(groupData) {
  return http.post(apiEndpoin, {
    title: groupData.title,
    categoryId: groupData.categoryId,
    location: groupData.location,
    description: groupData.description,
    startTime: groupData.startTime,
    meetingDate: groupData.meetingDate,
    keywords: groupData.keywords,
  });
}

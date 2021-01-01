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

// GET one by ID
export function getGroup(groupId) {
  return http.get(`${apiEndpoin}/group/${groupId}`);
}

// POST
export function createNewGroup(groupData) {
  // formData > res.data > fileName & filePath(`${BASE_URL}/image/${fileName}`)
  // const formData = new FormData();
  // formData.append("img", groupData.image);
  // console.log(formData);

  return http.post(apiEndpoin, {
    title: groupData.title,
    userId: groupData.userId,
    categoryId: groupData.categoryId,
    location: groupData.location,
    description: groupData.description,
    startTime: groupData.startTime,
    meetingDate: groupData.meetingDate,
    keywords: groupData.keywords,
    image: groupData.coverImage,
  });
}

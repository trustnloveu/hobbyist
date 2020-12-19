import http from "./httpService";

const apiEndpint = "/categories";

// Endpoint = url + id
function categoryUrl(id) {
  return `${apiEndpint}/${id}`;
}

// GET all
export function getCategories() {
  return http.get(apiEndpint);
}

// GET one
export function getCategory(id) {
  return http.get(categoryUrl(id));
}

// POST | PUT
export function saveCategory(category) {
  if (category._id) {
    const body = { ...category };
    delete body._id;
    return http.put(`${apiEndpint}/${category._id}`, body);
  }

  return http.post(apiEndpint, category);
}

// DELETE
export function deleteCategory(id) {
  return http.delete(categoryUrl(id));
}

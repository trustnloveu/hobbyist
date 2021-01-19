import http from "./httpService";
import jwtDecode from "jwt-decode";

// endPoint & token
const apiEndPoint = "/auth";
const tokenKey = "token";

// token > http header
http.setJwt(getJwt());

// login
async function login(email, password) {
  const { data: jwt } = await http.post(apiEndPoint, {
    email,
    password,
  });
  localStorage.setItem(tokenKey, jwt);
}

// register > login
function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

// logout
function logout() {
  localStorage.removeItem(tokenKey);
}

// get user info from tokon
function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt); // return obj(user)
  } catch (ex) {
    console.log("Local Storage에 토큰이 없습니다.");
    return null;
  }
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};

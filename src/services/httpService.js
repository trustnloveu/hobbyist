import axios from "axios";
import { toast } from "react-toastify";

// default url
// axios.defaults.baseURL = precess.env.REACT_APP_API_URL;

// error interceptor
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast("서버에서 에러가 발생하였습니다.");
  }

  return Promise.reject(error);
});

// set JSON web token to header
// function setJwt(jwt) {
//     axios.defaults.hearders.common["x-auth-token"] = jwt
// }

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

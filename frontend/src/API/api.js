import axios from 'axios'
import Cookies from 'js-cookie'

const APIAuth = axios.create({
  baseURL: "http://localhost:5050"
});

APIAuth.interceptors.request.use(
  req => {
    console.log(req);
    req.headers.authorization = `Bearer ${Cookies.get('token')}`;
    return req;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

APIAuth.interceptors.response.use(
  res => {
    console.log(res.data);
    return res
  },
  err => {
    if (err.response.status === 401) {
      Cookies.remove('token');
      window.location = '/homepage';
    };
    return Promise.reject(err)
  }
);

export default APIAuth
const BASE_URL = 'http://54.180.189.0:8080';

const API = {
  login: `${BASE_URL}/login`,
  signup: `${BASE_URL}/auth/signUp`,
  detail: `${BASE_URL}/products/detail`,
  products: `${BASE_URL}/products/category`,
  cart: `${BASE_URL}/cart/`,
};

export { API };

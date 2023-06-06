const BASE_URL = 'http://54.180.189.0:80';

const API = {
  login: `${BASE_URL}/api/auth/login`,
  signup: `${BASE_URL}/api/auth/signup `,
  detail: `${BASE_URL}/products/detail`,
  products: `${BASE_URL}/products/category`,
  cart: `${BASE_URL}/cart/`,
};

export { API };

const BASE_URL = 'http://localhost:3000';

const API = {
  login: `${BASE_URL}/login`,
  signup: `${BASE_URL}/auth/signUp`,
  signin: `${BASE_URL}/auth/signIn`,
  detail: `${BASE_URL}/products/detail`,
  products: `${BASE_URL}/products/category`,
  cart: `${BASE_URL}/cart/`,
};

export { API };

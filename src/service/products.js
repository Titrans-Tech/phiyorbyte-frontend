import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getFlashSales = async () => {
  const response = await axios.get(`${API_URL}/products/flash-sales`);
  return response;
};

export const getFeaturedProducts = async (category = "all", gender = "all") => {
  const response = await axios.get(
    `${API_URL}/products/featured?category=${category}&gender=${gender}`
  );
  return response;
};

export const getNewArrivals = async (category = "all", gender = "all") => {
  const response = await axios.get(
    `${API_URL}/products/new-arrivals?category=${category}&gender=${gender}`
  );
  return response;
};

export const getBestSellers = async (category = "all", gender = "all") => {
  const response = await axios.get(
    `${API_URL}/products/best-sellers?category=${category}&gender=${gender}`
  );
  return response;
};

import { API } from "..";

export const getMenCategory = async () => {
  try {
    const response = await API.get(`/category/mencategory`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWomenCategory = async () => {
  try {
    const response = await API.get(`/category/womencategory`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getArrivalCategory = async () => {
  try {
    const response = await API.get(`/category/newarrivalcategory`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSubCategory = async (category) => {
  try {
    const response = await API.get(`/product/subcategory/${category}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductDetails = async (productId) => {
  try {
    const response = await API.get(`/product/productdetails/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// /api/product/productdetails/719883051

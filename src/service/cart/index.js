import { API } from "..";

export const addCart = async (id, bodyData) => {
  try {
    const response = await API.post(`/carts/add/${id}`, bodyData);
    return response;
  } catch (error) {
    throw error;
  }
};
// cart/deleteartproduct/10

export const deleteCart = async (id) => {
  try {
    const response = await API.get(`/cart/deleteartproduct/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
// cart/couponapplication

export const addCouponApplication = async (bodyData) => {
  try {
    const response = await API.post(`/cart/couponapplication`, bodyData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addToCheckout = async (bodyData) => {
  try {
    const response = await API.post(`/cart/addcheckout`, bodyData);
    return response;
  } catch (error) {
    throw error;
  }
};

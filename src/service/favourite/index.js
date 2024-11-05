import { API } from "..";

export const addFavorite = async (id, bodyData) => {
  try {
    const response = await API.post(`/favorite/addfavorite/${id}`, bodyData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addCoupon = async (bodyData) => {
  try {
    const response = await API.post(`/favorite/addcoupon`, bodyData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addCheckout = async (bodyData) => {
  try {
    const response = await API.post(`/favorite/addcheckout`, bodyData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getFavourites = async () => {
  try {
    const response = await API.get(`/favorite/myfavourite`);
    return response;
  } catch (error) {
    throw error;
  }
};

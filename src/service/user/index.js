import { API } from "..";

export const fetchUserProfile = async (ref_no) => {
  try {
    const response = await API.get(`/users/viewmyprofile/${ref_no}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchUserOrders = async () => {
  try {
    const response = await API.get(`/users/order/viewmyorders`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (ref_no, bodyData) => {
  try {
    const response = await API.put(`/users/changepasword/${ref_no}`, bodyData);
    return response;
  } catch (error) {
    throw error;
  }
};

// https://api.pdempire.co.uk/api/users/cart/myordersproduct

export const viewProductOrders = async (bodyData) => {
  try {
    const response = await API.get(`/users/cart/viewmycartitems`, bodyData);
    return response;
  } catch (error) {
    throw error;
  }
  // https://api.pdempire.co.uk/api/users/cart/myordersproduct
};

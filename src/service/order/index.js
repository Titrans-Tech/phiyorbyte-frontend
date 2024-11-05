import { API } from "..";

export const viewOrders = async () => {
  try {
    const response = await API.get(`/users/order/viewmyorders`);
    return response;
  } catch (error) {
    throw error;
  }
};

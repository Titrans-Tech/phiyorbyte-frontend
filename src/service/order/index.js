import { API } from "..";

export const viewOrders = async () => {
  try {
    const response = await API.get(`/users/order/viewmyorders`);
    return response;
  } catch (error) {
    throw error;
  }
};

// product/subcategory/sport

export const getItemsBySubcategory = async (category) => {
  try {
    const response = await API.get(`/product/subcategory/${category}`);
    return response;
  } catch (error) {
    throw error;
  }
};

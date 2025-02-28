import axios from "axios";
import { API, base_url } from "..";

export const loginUser = async (bodyData) => {
  try {
    const response = await axios.post(`${base_url}loginuser`, bodyData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (bodyData) => {
  try {
    const response = await axios.post(`${base_url}registeruser`, bodyData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    const response = await API.post(`/logout`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const recoverPassword = async (bodyData) => {
  try {
    const response = await axios.post(`${base_url}users/forgot-password`, bodyData);
    return response;
  } catch (error) {
    throw error;
  }
};

import { getItemsBySubcategory } from "@/service/order";
import { fetchUserOrders, fetchUserProfile } from "@/service/user";
import { getStoredId } from "@/utils";
import { useEffect, useState } from "react";

export const useFetchProfile = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const user_details = getStoredId("user_data") && JSON.parse(getStoredId("user_data"));

  const getProfile = async () => {
    try {
      setLoading(true);
      const res = await fetchUserProfile(user_details?.ref_no);
      const response = await res.data;

      if (response) {
        setLoading(false);
        setProfile(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return { loading, profile, getProfile };
};

// fetchUserOrders

export const useFetchOrders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState(null);

  const getOrders = async () => {
    try {
      setLoading(true);
      const res = await fetchUserOrders();
      const response = await res.data;

      if (response) {
        setLoading(false);
        setOrders(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return { loading, orders, getOrders };
};

export const useFetchPoductByCategory = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const getProduct = async (category) => {
    try {
      setLoading(true);
      const res = await getItemsBySubcategory(category);
      const response = await res.data;

      if (response) {
        setLoading(false);
        setProduct(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { loading, product, getProduct };
};

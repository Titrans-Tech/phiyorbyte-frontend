import { getItemsBySubcategory } from "@/service/order";
import { fetchUserOrders, fetchUserProfile } from "@/service/user";
import { getStoredId } from "@/utils";
import { useQuery } from "@tanstack/react-query";
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
  const query = useQuery({
    queryKey: ["order-history"],
    queryFn: fetchUserOrders,
  });

  const { isError, isLoading, data } = query;

  return { loading: isLoading, orders: data?.data };
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

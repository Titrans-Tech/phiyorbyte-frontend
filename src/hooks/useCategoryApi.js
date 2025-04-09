import {
  getArrivalCategory,
  getMenCategory,
  getProductDetails,
  getWomenCategory,
} from "@/service/category";
import { getFavourites } from "@/service/favourite";
import { getErrorMessage } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useFetchMenProducts = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["men-category"],
    queryFn: getMenCategory,
  });

  return { loading: isLoading, error: isError, product: data?.data, refetch };
};

export const useFetchWomenProducts = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["women-category"],
    queryFn: getWomenCategory,
  });

  return { loading: isLoading, error: isError, product: data?.data, refetch };
};

export const useFetchNewProducts = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await getArrivalCategory();
      const response = res.data;
      if (response) {
        setLoading(false);
        setProduct(response?.data);
        console.log(response);
      }
    } catch (error) {
      setError(getErrorMessage(error));
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { loading, error, product, getProducts };
};

export const useFetchProductDetails = (productId) => {
  const query = useQuery({
    queryKey: ["product-details", productId],
    queryFn: () => getProductDetails(productId),
  });
  const { data, isError, isLoading, refetch } = query;

  return { loading: isLoading, error: isError, product: data?.data, refetch };
};

export const useGetFavourite = () => {
  const query = useQuery({ queryKey: ["favourites"], queryFn: getFavourites });
  const { data, isError, isLoading } = query;

  return { isLoading, isError, favourites: data?.data };
};

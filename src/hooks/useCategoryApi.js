import {
  getArrivalCategory,
  getMenCategory,
  getProductDetails,
  getWomenCategory,
} from "@/service/category";
import { getFavourites } from "@/service/favourite";
import { getErrorMessage } from "@/utils";
import { useEffect, useState } from "react";

export const useFetchMenProducts = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await getMenCategory();
      const response = res.data;
      if (response) {
        setLoading(false);
        setProduct(response?.data);
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

export const useFetchWomenProducts = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await getWomenCategory();
      const response = res.data;
      if (response) {
        setLoading(false);
        setProduct(response?.data);
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
        setProduct(response?.product);
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

export const useFetchProductDetails = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  const getProductsDetails = async (productId) => {
    try {
      setLoading(true);
      const res = await getProductDetails(productId);
      const response = res.data;
      if (response) {
        setLoading(false);
        setProduct(response?.product);
        console.log(response);
      }
    } catch (error) {
      setError(getErrorMessage(error));
      setLoading(false);
    }
  };

  return { loading, error, product, getProductsDetails };
};

export const useGetFavourite = () => {
  const [loading, setLoading] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [error, setError] = useState(null);

  const getFavouritessDetails = async () => {
    try {
      setLoading(true);
      const res = await getFavourites();
      const response = res.data;
      if (response) {
        setLoading(false);
        setFavourites(response);
      }
    } catch (error) {
      setError(getErrorMessage(error));
      setLoading(false);
    }
  };

  useEffect(() => {
    getFavouritessDetails();
  }, []);
  return { loading, error, favourites, getFavouritessDetails };
};

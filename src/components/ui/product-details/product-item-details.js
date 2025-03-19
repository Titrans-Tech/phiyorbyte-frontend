import { BtnLoading } from "@/components/button/btnLoading";
import { addCart } from "@/service/cart";
import { addFavorite } from "@/service/favourite";
import { getErrorMessage, getStoredId, WithCommas } from "@/utils";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegStar, FaStar, FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import Rating from "react-rating";

export const ProductItemsDetails = ({ product }) => {
  const colors = [product?.product_colors];
  const size = ["Small", "Medium", "Large", "X-Large"];
  const [current, setCurrent] = useState(0);
  const [selectedSize, setSelectedSize] = useState();
  const [count, setCount] = useState(1);
  const [pending, setPending] = useState(false);
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState({
    isSuccess: null,
    msg: "",
  });
  const [user, setUser] = useState(null);
  const router = useRouter().query;

  const user_details = getStoredId("user_data");

  useEffect(() => {
    setUser(JSON.parse(user_details));
  }, []);

  const addToCart = async () => {
    const bodyData = {
      user_id: user?.id,
      quantity: count,
    };
    try {
      setPending(true);
      const res = await addCart(product?.id, bodyData);
      const response = await res.data;

      if (response) {
        setPending(false);

        setSuccess({
          isSuccess: true,
          msg: "Product Added successful",
        });
      }
    } catch (error) {
      setSuccess({
        isSuccess: false,
        msg: getErrorMessage(error),
      });
      setPending(false);
      console.log(error);
    }
  };

  const addToFavourite = async () => {
    const bodyData = {
      user_id: router.id,
      quantity: 1,
    };
    try {
      setLoading(true);
      const res = await addFavorite(product?.id, bodyData);
      const response = await res.data;

      if (response) {
        setLoading(false);

        setSuccess({
          isSuccess: true,
          msg: "Product Added successful",
        });
      }
    } catch (error) {
      setSuccess({
        isSuccess: false,
        msg: getErrorMessage(error),
      });
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (success.isSuccess) {
      setTimeout(() => {
        setSuccess({ isSuccess: null, msg: "" });
      }, [4000]);
    }
  }, [success.isSuccess]);

  return (
    <div>
      <div className="flex gap-3 items-start">
        <h3 className="text-4xl md:max-w-lg font-black ">{product?.brand_name}</h3>
        {loading ? (
          <BtnLoading />
        ) : (
          <CiHeart
            onClick={addToFavourite}
            fontSize={30}
            cursor="pointer"
            className="hover:text-black"
          />
        )}
      </div>
      <div className="flex my-1 items-center gap-1">
        <Rating
          initialRating={4.5}
          emptySymbol={<FaRegStar color="#FFC633" />}
          fullSymbol={<FaStar color="#FFC633" />}
          start={0}
          stop={5}
          step={1}
        />
        <p className="font-normal text-sm -mt-1">4/5</p>
      </div>
      <div className="flex items-center justify-start gap-2">
        <h3 className="text-black font-bold text-2xl">
          ₦{WithCommas(product?.purchase_price)}{" "}
          <span className="text-[#0000004D]">₦{WithCommas(product?.amount)}</span>
        </h3>
        <div className="bg-[#FF33331A] px-3  w-fit rounded-full ">
          <p className="text-sm font-medium text-[#FF3333]">-${product?.discount}%</p>
        </div>
      </div>
      <p className="text-base font-normal text-[#00000099]">{product?.body}</p>
      <div className="border-b my-2"></div>
      <div>
        <p className="text-[#00000099]">Select Colors</p>
        <div className="flex items-center gap-3 mt-2">
          {colors.map((cl, clIndex) => (
            <div
              role="button"
              onClick={() => setCurrent(clIndex)}
              key={clIndex}
              style={{ background: cl }}
              className={`w-7 h-7 rounded-full flex items-center justify-center `}
            >
              {current === clIndex && <FaCheck color="white" fontSize={12} />}
            </div>
          ))}
        </div>
      </div>
      <div className="border-b my-2"></div>
      <div>
        <p className="text-[#00000099]"> Size</p>
        {product?.product_size ? (
          product?.product_size
        ) : (
          <div className="mt-2 flex flex-wrap items-center gap-3">
            {size.map((sl, slIndex) => (
              <button
                onClick={() => setSelectedSize(sl)}
                key={slIndex}
                className={`px-4 py-1 ${
                  selectedSize === sl ? "bg-black text-white" : "bg-[#F0F0F0] text-black"
                }  text-base  rounded-full w-fit`}
              >
                {sl}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="border-b my-2"></div>
      <div className="flex items-center gap-3">
        <div className="w-[128px] max-w-32 bg-[#F0F0F0] h-10 rounded-full px-4 gap-3 flex items-center justify-between">
          <button disabled={count <= 1} onClick={() => setCount(count - 1)}>
            <FaMinus />
          </button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>
            <FaPlus />
          </button>
        </div>
        <button onClick={addToCart} className=" w-full h-10 px-6 bg-black rounded-full text-white">
          {pending ? <BtnLoading /> : "Add to Cart"}
        </button>
      </div>
      {success.isSuccess && (
        <div className="flex items-center gap-3">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="24" height="24" rx="12" fill="#28A745" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.2074 7.293C20.3949 7.48053 20.5002 7.73484 20.5002 8C20.5002 8.26516 20.3949 8.51947 20.2074 8.707L10.7074 18.207C10.5199 18.3945 10.2656 18.4998 10.0004 18.4998C9.73524 18.4998 9.48094 18.3945 9.29341 18.207L4.79341 13.707C4.61125 13.5184 4.51045 13.2658 4.51273 13.0036C4.51501 12.7414 4.62018 12.4906 4.80559 12.3052C4.991 12.1198 5.24181 12.0146 5.50401 12.0123C5.7662 12.01 6.0188 12.1108 6.20741 12.293L10.0004 16.086L18.7934 7.293C18.9809 7.10553 19.2352 7.00021 19.5004 7.00021C19.7656 7.00021 20.0199 7.10553 20.2074 7.293Z"
              fill="#E7E7E7"
            />
          </svg>
          <p className="text-green-600 text-base my-2">Product Added successfully</p>
        </div>
      )}
      {success.isSuccess === false && <p className="text-red-500 text-base">{success.msg}</p>}
    </div>
  );
};

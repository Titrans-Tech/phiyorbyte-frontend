import { BtnLoading } from "./btnLoading";

export const PrimaryButton = ({ onClick, loading, children }) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className="h-12 bg-[#809180] text-white rounded-[62px] disabled:cursor-not-allowed flex items-center justify-center w-full px-2 mt-10"
    >
      {loading ? <BtnLoading /> : children}
    </button>
  );
};

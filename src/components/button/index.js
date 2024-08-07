export const PrimaryButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="h-12 bg-[#809180] text-white rounded-[62px] flex items-center justify-center w-full px-2 mt-10"
    >
      {children}
    </button>
  );
};

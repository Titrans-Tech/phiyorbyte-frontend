import { FaCheck } from "react-icons/fa";
import AppDialog from "../modal";

export const SuccessModal = ({ isOpen, message, onClick }) => {
  return (
    <AppDialog isOpen={isOpen}>
      <div className="py-4 flex items-center justify-center flex-col gap- rounded-md px-4 bg-white">
        <div className="bg-green-500 flex items-center justify-center w-[70px] h-[70px] rounded-full">
          <FaCheck fontSize={25} color="white" />
        </div>
        <h3 className="font-medium text-xl">Successful</h3>
        <p>{message}</p>
        <button onClick={onClick} className="bg-black py-2 px-6 text-white mt-2 rounded-full">
          Done
        </button>
      </div>
    </AppDialog>
  );
};

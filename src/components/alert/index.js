import { MdClose } from "react-icons/md";

const Alerts = ({ show, message, close }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="w-full mt- mb-3 rounded border border-[#ffccc7]  py-3 px-3 bg-[#fff5f5]">
      <div className="flex items-center justify-start gap-3">
        <MdClose className="text-[#dd6773] cursor-pointer" onClick={close} />
        <span className="text-base text-[#dc3545] font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Alerts;

import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const FaqAccordion = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border-b cursor-pointer border-[#0000001A] flex items-center justify-between py-2"
      >
        <h3 className="font-bold text-base">{faq.question}</h3>
        <MdOutlineKeyboardArrowDown
          cursor="pointer"
          className={isOpen ? "rotate-180 transition-all" : ""}
        />
      </div>
      {isOpen && (
        <div className="transition-all">
          <p className="text-sm text-[#00000099]">{faq.answer}</p>
        </div>
      )}
    </section>
  );
};

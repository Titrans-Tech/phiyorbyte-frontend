import { useState } from "react";
import { CheckMark, FilterIcon } from "../icons";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdCheck,
} from "react-icons/md";

export const FilterComponent = () => {
  const [togglePrice, setTogglePrice] = useState(false);
  const [toggleColor, setToggleColor] = useState(false);
  const [toggleSize, setToggleSize] = useState(false);
  const [toggleDress, setToggleDress] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const size = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  const colorFilter = [
    "#00C12B",
    "#F50606",
    "#F5DD06",
    "#F57906",
    "#06CAF5",
    "#063AF5",
    "#7D06F5",
    "#F506A4",
    "#FFFFFF",
    "#000000",
  ];
  const filterBy = ["T-Shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
  const filterDress = ["Casual", "Formal", "Party", "Gym"];

  return (
    <div className="border w-full max-w-xs px-3 rounded-lg py-2 border-[#0000001A]">
      <section className="flex items-center border-b pb-1  justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        <FilterIcon />
      </section>
      {filterBy.map((filters, filterIndex) => (
        <section
          key={filterIndex}
          className="py-2 cursor-pointer flex items-center justify-between"
        >
          <h3 className="text-[#00000099] font-semibold">{filters}</h3>
          <MdKeyboardArrowRight color="#00000099" />
        </section>
      ))}
      <section className="border-t border-[#0000001A] py-2"></section>
      <div className="border-b">
        <section
          onClick={() => setTogglePrice(!togglePrice)}
          className="flex  items-center  pb-1  justify-between"
        >
          <h3 className="text-lg font-semibold">Price</h3>
          {togglePrice ? (
            <MdKeyboardArrowUp cursor="pointer" />
          ) : (
            <MdOutlineKeyboardArrowDown cursor="pointer" />
          )}
        </section>
        {togglePrice && (
          <div className="my-2">
            <input type="range" className="w-full accent-black" />
          </div>
        )}
      </div>
      <div className="border-b my-3">
        <section
          onClick={() => setToggleColor(!toggleColor)}
          className="flex  items-center  pb-1  justify-between"
        >
          <h3 className="text-lg font-semibold">Color</h3>
          {toggleColor ? (
            <MdKeyboardArrowUp cursor="pointer" />
          ) : (
            <MdOutlineKeyboardArrowDown cursor="pointer" />
          )}
        </section>
        {toggleColor && (
          <div className="my-2 flex items-center gap-2 flex-wrap">
            {colorFilter.map((color, colorIndex) => (
              <div
                onClick={() => setSelectedColor(colorIndex)}
                key={colorIndex}
                style={{ background: color }}
                className={`w-10 h-10 cursor-pointer flex items-center justify-center border-2 border-[#00000033]  rounded-full `}
              >
                {selectedColor === colorIndex ? <MdCheck fontSize={20} color="#fff" /> : ""}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border-b my-3">
        <section
          onClick={() => setToggleSize(!toggleSize)}
          className="flex  items-center  pb-1  justify-between"
        >
          <h3 className="text-lg font-semibold">Size</h3>
          {toggleSize ? (
            <MdKeyboardArrowUp cursor="pointer" />
          ) : (
            <MdOutlineKeyboardArrowDown cursor="pointer" />
          )}
        </section>
        {toggleSize && (
          <div className="my-2 flex items-center gap-2 flex-wrap">
            {size.map((size, sizeIndex) => (
              <div
                onClick={() => setSelectedSize(sizeIndex)}
                key={sizeIndex}
                className={`py-1 px-5 cursor-pointer flex items-center justify-center border ${
                  selectedSize === sizeIndex ? "bg-black text-white" : ""
                }  border-[#00000033]  rounded-full `}
              >
                {size}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className=" my-3">
        <section
          onClick={() => setToggleDress(!toggleDress)}
          className="flex  items-center  pb-1  justify-between"
        >
          <h3 className="text-lg font-semibold">Dress Size</h3>
          {toggleDress ? (
            <MdKeyboardArrowUp cursor="pointer" />
          ) : (
            <MdOutlineKeyboardArrowDown cursor="pointer" />
          )}
        </section>
        {toggleDress && (
          <div className="my-2">
            {filterDress.map((fD, fDIndex) => (
              <section
                key={fDIndex}
                className="py-2 cursor-pointer flex items-center justify-between"
              >
                <h3 className="text-[#00000099] font-semibold">{fD}</h3>
                <MdKeyboardArrowRight color="#00000099" />
              </section>
            ))}
          </div>
        )}
      </div>
      <div>
        <button className="w-full py-2 px-2 bg-black rounded-full text-white">Apply Filter</button>
      </div>
    </div>
  );
};

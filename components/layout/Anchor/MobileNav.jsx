import { useState } from "react";
import Link from "next/link";

import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

import { anchors } from "./anchorList";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !isOpen);
  };

  return (
    <div className="transition-all duration-500 ease-in hover:scale-105 rounded grid grid-cols-[repeat(3,_1fr)] grid-rows-1 lg:hidden justify-self-end gap-1 bg-slate-800 mr-3 md:mr-6 lg:mr-9 opacity-100">
      <button
        className={`${
          !isOpen
            ? `transition-all duration-500  col-start-2 col-end-3`
            : `transition-all duration-500  col-start-1  col-end-2 justify-self-end`
        } w-5 md:w-7 lg:w-9`}
        onClick={handleOpen}
      >
        {isOpen ? (
          <FaTimes className="font-bold text-4xl p-1 -translate-x-1/4 text-red-600 transition ease-in duration-500 hover:scale-105" />
        ) : (
          <FaBars className="font-bold text-4xl p-1 text-amber-500 transition ease-in duration-500 hover:scale-105" />
        )}
      </button>
      <div
        className={`${
          isOpen
            ? `col-start-1 col-span-2 grid grid-cols-1 grid-rows-[repeat(7,_min-content)]] pt-12 ml-12 bg-slate-800 h-full w-full`
            : `''`
        } transition ease-in duration-500`}
      >
        {isOpen &&
          anchors.map((anchor) => {
            return (
              <Link href={anchor.href} key={anchor.id}>
                <a
                  className={`rounded text-orange-500 hover:scale-105 font-raleway-n600 p-4 text-lg justify-self-stretch bg-slate-800 hover:bg-slate-700 ${
                    anchor.active ? `scale-110 text-amber-400 text-xl` : ""
                  } ${
                    anchor.special
                      ? `bg-slate-900 rounded-md scale-110 text-xl hover:bg-slate-800`
                      : ""
                  } row-start-[${anchor.colStart}] row-start-[${
                    anchor.colEnd
                  }] transition ease-in duration-500`}
                >
                  {anchor.title}
                </a>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default MobileNav;

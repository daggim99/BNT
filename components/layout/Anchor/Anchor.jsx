import { useState } from "react";

import Link from "next/link.js";

import { anchors } from "./anchorList.js";

const Anchor = (index) => {
  const [active, setActive] = useState(anchors);

  const handleActiveLink = (index) => {
    active.forEach((element) => (element.active = false));

    const activeLinkIndex = active.findIndex(
      (element) => element.link === index
    );

    active[activeLinkIndex].active = true;
  };

  const fonts = `tab-land:text-lg text-orange-900 font-montserrat-n700 text-base`;

  return (
    <>
      <div className="hidden lg:grid lg:grid-cols-[repeat(7,_1fr)] gap-2 px-4 opacity-100">
        {anchors.map((anchor, index) => {
          return (
            <Link href={anchor.href} key={anchor.id}>
              <a
                onClick={(e) => handleActiveLink(index)}
                className={`transition-all duration-500 ease-in cursor-pointer hover:border-b-4 hover:border-orange-500 ${
                  anchor.active
                    ? `border-b-4 uppercase border-slate-900 scale-105 text-slate-900`
                    : ""
                } ${
                  anchor.special
                    ? `align-middle self-stretch overflow-y-hidden overflow-x-auto hover:scale-90 shadow-md bg-slate-900 rounded-md p-4 border-b-0 mr-9 text-orange-700 text-center uppercase`
                    : ""
                } hover:text-orange-600 hover:scale-95 lg:col-start-[${
                  anchor.colStart
                }] lg:col-end-[${
                  anchor.colEnd
                }] justify-self-center ${fonts} self-center pb-9`}
              >
                {anchor.title}
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Anchor;

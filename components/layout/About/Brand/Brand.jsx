import React from "react";

import Image from "next/image";

import brand from "../../../../public/images/Brand/Brand.png";

const Brand = () => {
  return (
    <section className="overflow-hidden rounded-lg h-[96vh] md:h-[40vh] mb-12 w-[90%] mx-auto row-start-[9] md:row-start-5 md:row-end-6 grid justify-center grid-rows-[1.2fr_1fr] gap-4 grid-cols-1 md:grid-cols-[0.4fr,_0.6fr] md:grid-rows-1 bg-white shadow-lg transition-d hover:shadow-xl hover:scale-[1.009]">
      <figure className="transition-d col-start-1 col-end-2 w-full h-full relative block self-stretch justify-self-stretch object-cover rounded-t-lg md:rounded-none md:rounded-l-lg">
        <Image
          className="transition-d hover:scale-125 overflow-hidden"
          layout="fill"
          objectFit="cover"
          src={brand}
          alt="Derartu Tulu"
        />
      </figure>
      <div className="col-start-1 col-end-2 md:col-start-2 md:col-end-3 grid grid-cols-1 grid-rows-[1fr,_min-content,_min-content,_1fr] gap-4">
        <h4 className="text-amber-900 text-center md:text-left text-3xl font-montserrat-n700 self-center">
          Brand Ambassador
        </h4>
        <h3 className="text-amber-800 text-center md:text-left text-xl font-montserrat-n500">
          Derartu Tulu
        </h3>
        <p className="text-amber-700 px-24 md:px-0 text-center md:text-left md:pr-40 text-base font-raleway-n500 tracking-wide">
          ThLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
        </p>
        <p className="text-amber-600 text-center  md:text-left text-xs self-center">
          Last updated 3 mins ago
        </p>
      </div>
    </section>
  );
};

export default Brand;

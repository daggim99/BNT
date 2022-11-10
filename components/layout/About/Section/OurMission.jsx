import React from "react";

import Link from "next/link";

const OurMission = () => {
  return (
    <section className="row-start-2 col-start-1 col-end-13">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="svg absolute hidden h-[560px] w-full -z-10 overflow-hidden lg:block"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="#f9dcc4" offset="0%"></stop>
            <stop stopColor="#FFCB42" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
        ></path>
      </svg>

      <div className="grid lg:grid-cols-2 gap-12 container mx-auto xl:px-32 px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
        <div className="mt-3 lg:mt-0">
          <h1 className="text-5xl text-white md:text-6xl xl:text-7xl font-montserrat-n600 mb-12">
            Our Mission <br />
            <p className="pt-4 text-[#001427] text-base leading-relaxed selection:text-red-900 tracking-wide font-montserrat-n500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
              venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Quisque nisl eros, pulvinar facilisis justo mollis, auctor
              consequat urna. Morbi a bibendum metus. Donec scelerisque
              sollicitudin enim eu venenatis Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis
              justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec
              scelerisque sollicitudin enim eu venenatis
            </p>
          </h1>
          <Link href="/contact/#newsletter">
            <a
              className="inline-block px-7 py-3 mr-2 bg-amber-600 text-white font-montserrat-n500 text-sm leading-snug uppercase rounded shadow-md hover:bg-amber-800 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-900 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              role="button"
            >
              subscribe
            </a>
          </Link>
          <Link href="/contact">
            <a
              className="inline-block px-7 py-3 bg-transparent text-amber-600 font-montserrat-n500 text-sm leading-snug uppercase rounded hover:text-amber-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              role="button"
            >
              contact us
            </a>
          </Link>
        </div>
        <div className="mb-12 lg:mb-0">
          <img
            src="https://mdbootstrap.com/img/new/standard/city/017.jpg"
            className="w-full rounded-lg shadow-lg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;

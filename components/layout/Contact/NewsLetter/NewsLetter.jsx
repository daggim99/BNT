import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";

const NewsLetter = () => {
  return (
    <section
      id="newsletter"
      className="flex flex-wrap items-center w-screen col-span-full mx-auto transition-d hover:shadow-xl hover:scale-105 rounded-lg mb-9 shadow-lg bg-white container px-6 text-gray-800 text-center lg:text-left"
    >
      <section className="grow-0 shrink-0 basis-auto hidden lg:flex lg:w-6/12 xl:w-4/12">
        <Player
          autoplay
          loop
          src={`/Lottie/Email.json`}
          className="w-[100%] lg:w-full lg:h-full object-cover"
        />
      </section>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
        <div className="px-6 py-12 md:px-12">
          <h2 className="text-3xl font-montserrat-n600 mb-6">
            Do not miss any updates.
            <br />
            <span className="text-amber-600">Subscribe to the newsletter</span>
          </h2>
          <p className="text-gray-500 mb-12 font-montserrat-n500">
            We will write rarely and only high-quality content.
          </p>
          <div className="md:flex flex-row font-montserrat-n500">
            <input
              type="text"
              className="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-amber-600 focus:outline-none"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="font-montserrat-n500 inline-block px-7 py-3 bg-amber-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-amber-700 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;

import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";

const Map = () => {
  return (
    <div className="w-screen col-span-full container px-6 mx-auto transition-d hover:shadow-xl hover:scale-105">
      <section className="mb-32 text-gray-800">
        <div className="block rounded-lg shadow-lg bg-white">
          <div className="flex flex-wrap items-center">
            <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-[50%] xl:w-[50%]">
              <div className="h-[750px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126121.18934528054!2d38.7448832!3d8.945663999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1665342901780!5m2!1sen!2set"
                  className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  frameborder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-[50%] xl:w-[50%]">
              <div className="flex flex-wrap pt-12 lg:pt-0">
                <section>
                  <Player
                    autoplay
                    loop
                    src={`/Lottie/Map.json`}
                    className="w-[100%] lg:w-full lg:h-full object-cover"
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;

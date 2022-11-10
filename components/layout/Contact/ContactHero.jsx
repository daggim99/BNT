import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";

const ContactHero = () => {
  const styleMain = {
    "background-color": "hsl(218, 41%, 15%)",
    "background-image":
      "radialGradient(650px, circle at, 0% 0%, hsl(218, 41%, 35%) 15%,hsl(218, 41%, 30%) 35%,hsl(218, 41%, 20%) 75%,hsl(218, 41%, 19%) 80%, transparent 100%)",
    "background-image":
      "radialGradient(1250px circle at 100% 100%,hsl(218, 41%, 45%) 15%,hsl(218, 41%, 30%) 35%,hsl(218, 41%, 20%) 75%,hsl(218, 41%, 19%) 80%,transparent 100%)",
  };

  const styleRad1 = {
    height: "220px",
    width: "220px",
    top: "-60px",
    left: "-130px",
    background: "radialGradient(#44006b, #ad1fff)",
    overflow: "hidden",
  };

  const styleRad2 = {
    borderRadius: "38% 62% 63% 37% / 70% 33% 67% 30%",
    bottom: "-60px",
    right: "-110px",
    width: "300px",
    height: "300px",
    background: "radialGradient(#44006b, #ad1fff)",
    overflow: "hidden",
  };

  const styleGlass = {
    backgroundColor: "hsla(0, 0%, 100%, 0.9)",
    backdropFilter: "saturate(200%) blur(25px)",
  };

  return (
    <section
      class="col-span-full w-screen overflow-hidden transition-d hover:shadow-xl hover:scale-105"
      style={styleMain}
    >
      <div class="px-6 py-12 lg:py-24 md:px-12 text-center lg:text-left">
        <div class="container mx-auto xl:px-32 text-gray-800">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="mt-12 lg:mt-0 z-10">
              <h1
                class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                <span className="text-amber-500 capitalize tracking-widest leading-relaxed">
                  Contact us <br />
                </span>
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p class="opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
            <div class="mb-12 lg:mb-0 relative">
              <div
                style={styleRad1}
                class="absolute rounded-full shadow-lg"
              ></div>
              <div style={styleRad2} class="absolute shadow-lg"></div>
              <div
                style={styleGlass}
                class="mx-auto lg:ml-12 block w-[60%] lg:w-full lg:h-full rounded-lg shadow-lg px-1 py-1 md:px-1"
              >
                <Player
                  autoplay
                  loop
                  src={`/Lottie/Contact.json`}
                  className="w-[100%] lg:w-full lg:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

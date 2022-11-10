import Link from "next/link";

import { Player } from "@lottiefiles/react-lottie-player";

const Hero = () => {
  const style1 = {
    backgroundPosition: "50%",
    backgroundImage:
      "url(https://mdbootstrap.com/img/new/textures/full/142.jpg)",
    height: "500px",
  };

  const style2 = {
    marginTop: "-170px",
    background: "hsla(0, 0%, 100%, 0.7)",
    backdropFilter: "blur(30px)",
  };

  return (
    <div className="grid grid-cols-2 w-screen">
      <section className="row-start-1 row-end-2 col-start-1 col-end-3 mb-40">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={style1}
        ></div>

        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-left text-gray-800">
            <div
              className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
              style={style2}
            >
              <h1 className="text-left text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                About Us <br />
                <span className="text-amber-600 text-4xl">
                  Lorem ipsum dolor sit amet
                </span>
              </h1>
              <Link href="/contact/#newsletter">
                <a
                  className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-amber-500 text-white font-montserrat-n500 text-sm leading-tight uppercase rounded shadow-md hover:bg-amber-800 hover:shadow-lg focus:bg-amber-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  role="button"
                >
                  subscribe
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className="inline-block px-7 py-3  font-montserrat-n500 text-base bg-transparent text-amber-600 font-medium leading-tight uppercase rounded hover:text-amber-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  role="button"
                >
                  contact us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="z-10 col-start-2 col-end-3 row-start-1 row-end-2 self-center">
        <Player
          autoplay
          loop
          src={`/Lottie/About.json`}
          className="w-[110%] h-[200%] z-20"
        />
      </section>
    </div>
  );
};

export default Hero;

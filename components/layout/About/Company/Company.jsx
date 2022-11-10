import React from "react";

import Link from "next/link";

const Company = () => {
  return (
    <section className="row-start-4 md:row-start-3 row-span-2 md:row-end-3 w-screen mt-24 container mx-auto grid lg:grid-cols-2 xl:px-32 text-center lg:text-left text-gray-800 px-6">
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
      <div
        className="mb-3 lg:mb-0 block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
        style={{
          background: "hsla(0, 0%, 100%, 0.55)",
          backdropFilter: "blur(30px)",
        }}
      >
        <h2 className="text-4xl font-montserrat-n600 mb-6">
          Company Formation
        </h2>
        <p className="text-gray-500 mb-6 pb-2 lg:pb-0 font-montserrat-n500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A soluta
          corporis voluptate ab error quam dolores doloremque, quae consectetur.
        </p>

        <div className="tracking-wide capitalize font-raleway-n600 flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
          <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 mr-2 text-green-500 hover:scale-110 hover:text-green-400"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
              ></path>
            </svg>
            Best team
          </p>

          <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 mr-2 text-green-500 hover:scale-110 hover:text-green-400"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
              ></path>
            </svg>
            Best quality
          </p>

          <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 h-4 mr-2 text-green-500 hover:scale-110 hover:text-green-400"
            >
              <path
                fill="currentColor"
                d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
              ></path>
            </svg>
            Best experience
          </p>
        </div>

        <p className="text-gray-500 mb-0 font-montserrat-n500">
          In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar.
          Sed semper ligula sed lorem tincidunt dignissim. Nam sed cursus
          lectus. Proin non rutrum magna. Proin gravida, justo et imperdiet
          tristique, turpis nisi viverra est, nec posuere ex arcu sit amet erat.
          Sed a dictum sem. Duis pretium condimentum nulla, ut aliquet erat
          auctor sed. Aenean facilisis neque id ligula maximus scelerisque. Nunc
          sed velit rhoncus, interdum dolor at, lacinia lacus. Proin eleifend
          viverra posuere. Ut commodo risus lacus, ac scelerisque quam aliquam
          dictum. Etiam dignissim pulvinar eros eget auctor. Quisque congue
          turpis quis libero ullamcorper imperdiet. Vivamus a orci maximus,
          dignissim ligula a, congue dui. Morbi et lectus sit amet neque luctus
          viverra. In ac turpis justo. Vivamus auctor quam vitae odio feugiat
          pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam sed
          cursus lectus. Proin non rutrum magna. Proin gravida, justo et
          imperdiet tristique, turpis nisi viverra est, nec posuere ex arcu sit
          amet erat. Sed a dictum sem. Duis pretium condimentum nulla, ut
          aliquet erat auctor sed. Aenean facilisis neque id ligula maximus
          scelerisque. Nunc sed velit rhoncus, interdum dolor at, lacinia lacus.
          Proin eleifend viverra posuere. Ut commodo risus lacus, ac scelerisque
          quam aliquam dictum. Etiam dignissim pulvinar eros eget auctor.
          Quisque congue turpis quis libero ullamcorper imperdiet. Vivamus a
          orci maximus, dignissim ligula a, congue dui. Morbi et lectus sit amet
          neque luctus viverra.
        </p>
        <Link href="/contact/#newsletter">
          <a
            className="mt-9 inline-block px-7 py-3 mr-2 bg-amber-600 text-white font-montserrat-n500 text-sm leading-snug uppercase rounded shadow-md hover:bg-amber-800 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-900 active:shadow-lg transition duration-150 ease-in-out"
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

      <div>
        <img
          src="https://mdbootstrap.com/img/new/ecommerce/vertical/117.jpg"
          className="w-full rounded-lg shadow-lg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Company;

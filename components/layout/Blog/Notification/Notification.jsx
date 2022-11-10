import React from "react";

import Link from "next/link";

const Notification = () => {
  return (
    <section className="transition-d hover:shadow-xl hover:scale-105 mt-9 h-[36vh] row-start-2 row-span-1 w-screen grid grid-cols-1 grid-rows-2 gap-2">
      <article className="row-start-1 row-end-2 capitalize justify-self-center self-center text-2xl tracking-wide text-center font-montserrat-n500">
        here We give you Content on and information related to our products and
        and News
      </article>
      <Link href="/contact/#newsletter">
        <div className="self-center row-start-2 row-end-3 justify-self-center px-7 py-1 bg-pink-200 text-center rounded-lg shadow-lg grid grid-cols-[1fr,_min-content] gap-4 transition-d hover:shadow-xl hover:scale-105">
          <p className="transition-d hover:shadow-sm hover:text-amber-900 text-2xl tracking-widest capitalize font-roboto-n500 self-center gap-2 text-orange-700">
            get notified
          </p>
          <div className="justify-self-center self-center">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bell"
              className="mx-auto transition-d text-amber-500 hover:scale-105 hover:shadow-sm hover:text-amber-600 w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Notification;

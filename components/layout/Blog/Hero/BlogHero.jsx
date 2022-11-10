import Link from "next/link";

import { Player } from "@lottiefiles/react-lottie-player";

const BlogHero = () => {
  return (
    <section className="transition-d hover:shadow-xl hover:scale-105 col-span-full h-full lg:h-[65vh] w-screen grid grid-cols-1 lg:grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] lg:grid-rows-1">
      <article className="px-3 lg:pl-12 xl:pl-24 lg:justify-self-start row-start-1 row-span-1 justify-self-center sm:text-center lg:text-left grid lg:grid-rows-[1fr_repeat(3,_min-content)] grid-rows-[1fr_repeat(4,_min-content)] gap-2">
        <h1 className="lg:justify-self-start text-4xl font-montserrat-n600 text-center pt-24 tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline lg:text-left text-amber-600 uppercase tracking-widest">
            NEWS FEED
          </span>{" "}
          <span className="block text-amber-700 capitalize lg:text-start lg:justify-self-start text-3xl lg:text-2xl">
            product updates and news feed
          </span>
        </h1>
        <p className="text-center lg:text-left mt-3 font-montserrat lg:justify-self-start text-base text-gray-900 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="col-start-1 col-end-2 justify-self-center lg:justify-self-start mt-5 md:mt-10 grid gap-3 grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 justify-self-center lg:justify-self-start">
            <Link href="/contact">
              <a className="capitalize rounded-md shadow flex w-full items-center justify-center border border-transparent bg-amber-600 px-8 py-2 text-base font-montserrat text-white hover:bg-amber-700 md:py-2 md:px-10 md:text-lg">
                Get started
              </a>
            </Link>
          </div>
          <div className="col-start-1 col-end-2 row-start-2 row-end-3 lg:col-start-2 lg:col-end-3 self-center lg:row-start-1 lg:row-end-2 lg:justify-self-start">
            <Link href="/contact/#newsletter">
              <a className="capitalize  flex w-full items-center justify-center rounded-md border border-transparent bg-amber-100 px-8 py-2 text-base font-montserrat text-amber-700 hover:bg-amber-200 md:py-2 md:px-10 md:text-lg">
                Subscribe
              </a>
            </Link>
          </div>
        </div>
      </article>
      <article className="mt-24 overflow-hidden content-center m-auto justify-center align-middle self-center w-full h-full z-10 border-none lg:col-start-2 col-start-1 col-end-2 row-start-2 row-end-3 lg:col-end-3 lg:row-start-1 lg:row-end-2">
        <Player
          autoplay
          loop
          src={`/Lottie/Blog.json`}
          className="w-[35%] lg:w-[60%] object-cover"
        />
      </article>
    </section>
  );
};

export default BlogHero;

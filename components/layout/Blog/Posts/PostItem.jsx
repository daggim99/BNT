import React from "react";

import Image from "next/image";
import Link from "next/link";

const PostItem = (props) => {
  const { text, title, author, date, src } = props;

  return (
    <div className="transition-d hover:shadow-xl hover:scale-105 px-3 grid grid-rows-[min-content,_1fr] bg-white rounded-lg shadow-lg">
      <figure
        className="relative w-full h-full justify-self-center overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <Image
          src={src}
          alt="Image"
          layout="responsive"
          height="65%"
          width="100%"
          objectFit="cover"
        />
        <Link href="#!">
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
            style={{
              "background-color": "rgba(251, 251, 251, 0.15)",
            }}
          />
        </Link>
      </figure>
      <div className="p-6">
        <h5 className="font-montserrat-n500 capitalize text-lg mb-3">
          {title}
        </h5>
        <p className="text-gray-500 mb-4 font-montserrat-n500">
          <small>
            Published <u>{date}</u> by
            <Link href="#">
              <a className="text-gray-900">{author}</a>
            </Link>
          </small>
        </p>
        <p className="mb-4 pb-2 font-montserrat">{text}</p>
        <Link href="#!">
          <a
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 bg-amber-600 text-white font-montserrat text-xs leading-tight uppercase rounded-full shadow-md hover:bg-amber-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Read more
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PostItem;

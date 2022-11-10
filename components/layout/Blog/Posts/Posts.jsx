import React from "react";

import PostItem from "./PostItem";

import { posts } from "./postData";

export const Posts = () => {
  return (
    <section className="transition-d hover:shadow-xl hover:scale-[1.0009] col-start-1 col-end-13 row-start-3 w-screen my-24 px-6 mb-32 text-gray-800 text-center grid grid-rows-[min-content,_1fr] grid-cols-[1fr]">
      <h2 className="row-start-1 row-end-2 capitalize text-3xl font-montserrat-n600 text-amber-700 mb-12 pb-4 text-center">
        Latest articles
      </h2>

      <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
        {posts.map((post) => {
          const { id, title, author, date, src, text } = post;
          return (
            <PostItem
              key={id}
              title={title}
              author={author}
              date={date}
              text={text}
              src={src}
            />
          );
        })}
      </div>
    </section>
  );
};

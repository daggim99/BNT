'use client'

import React, { useState } from 'react'

function Slider() {
  const [scroll, setScroll] = useState(0)

  const handleScrollUp = () => {
    if (scroll >= 2) setScroll(0)
    else if (scroll < 0) setScroll(2)
    else setScroll((e) => scroll + 1)
  }

  const handleScrollDown = () => {
    if (scroll >= 3) setScroll(0)
    else if (scroll < 0) setScroll(2)
    else setScroll((e) => scroll - 1)
  }

  const backgroundImage = {
    backgroundImage: `url('/images/Brand/Freshco/Slide/SlidePic${
      scroll + 2
    }.png')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border',
    backgroundOrigin: 'border',
    border: 'rounded',
    overflow: 'hidden',
  }

  const backgroundImage2 = {
    backgroundImage: `linear-gradient(#FFFFFF, #FFFFFF42), url('/images/Brand/Freshco/Slide/SlidePic${
      scroll + 3
    }.png')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border',
    backgroundOrigin: 'border',
  }

  const backgroundImage3 = {
    backgroundImage: `linear-gradient(#FFFFFF42, #FFFFFF), url('/images/Brand/Freshco/Slide/SlidePic${
      scroll + 1
    }.png')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundClip: 'border',
    backgroundOrigin: 'border',
  }

  return (
    <article
      className={`w-[80%] h-full justify-self-center col-start-2 col-span-1 row-start-1 row-span-full grid grid-cols-1 grid-rows-1`}
    >
      <div
        className={`justify-self-center self-center col-start-1 col-span-1 row-start-1 row-span-1 grid grid-cols-1 grid-row-[90px_790px_90px]`}
      >
        <button
          onClick={handleScrollUp}
          className={`col-start-1 justify-self-center col-span-full row-start-1 row-span-1`}
        >
          <svg
            width="98"
            height="73"
            viewBox="0 0 98 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.9957 0.998288C51.038 1.00859 53.0523 1.47337 54.8927 2.35894C56.733 3.24451 58.3531 4.52864 59.6354 6.11816L93.3146 46.9172C95.2826 49.3734 96.5211 52.333 96.8888 55.4588C97.2566 58.5847 96.7388 61.7509 95.3946 64.5968C94.3044 67.0701 92.5253 69.1774 90.2698 70.6669C88.0143 72.1563 85.3777 72.9651 82.6749 72.9966L15.3165 72.9966C12.6137 72.9651 9.97713 72.1564 7.72161 70.6669C5.46609 69.1774 3.687 67.0701 2.59679 64.5968C1.25256 61.7509 0.734809 58.5847 1.10255 55.4589C1.47029 52.333 2.70873 49.3734 4.67673 46.9172L38.3559 6.11816C39.6383 4.52864 41.2584 3.24451 43.0987 2.35894C44.939 1.47337 46.9534 1.00859 48.9957 0.998288Z"
              fill="#474646"
            />
          </svg>
        </button>
        <div
          className={`col-start-1 col-span-full row-start-2 row-span-1 grid grid-cols-1 grid-rows-[200px_390px_200px]`}
        >
          <figure
            style={backgroundImage2}
            className={`w-[571px] h-full col-start-1 col-span-1 row-start-1 row-span-1`}
          ></figure>

          <figure
            style={backgroundImage}
            className={`w-[571px] h-full col-start-1 col-span-1 row-start-2 row-span-1  rounded-md overflow-hidden`}
          ></figure>

          <figure
            style={backgroundImage3}
            className={`w-[571px] h-full col-start-1 col-span-1 row-start-3 row-span-1 rounded-md`}
          ></figure>
        </div>
        <button
          onClick={handleScrollDown}
          className={`col-start-1 col-span-full justify-self-center row-start-3 row-span-1`}
        >
          <svg
            width="98"
            height="73"
            viewBox="0 0 98 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48.9994 72.9968C46.9571 72.9865 44.9428 72.5218 43.1024 71.6362C41.2621 70.7506 39.642 69.4665 38.3597 67.877L4.68047 27.0779C2.71247 24.6217 1.47403 21.6621 1.10629 18.5363C0.738545 15.4105 1.25629 12.2442 2.60052 9.39834C3.69073 6.92501 5.46983 4.81775 7.72535 3.32826C9.98086 1.83877 12.6175 1.03 15.3202 0.998535H82.6786C85.3814 1.03 88.018 1.83877 90.2735 3.32826C92.529 4.81775 94.3081 6.92501 95.3983 9.39834C96.7426 12.2442 97.2603 15.4105 96.8926 18.5363C96.5248 21.6621 95.2864 24.6217 93.3184 27.0779L59.6392 67.877C58.3568 69.4665 56.7367 70.7506 54.8964 71.6362C53.0561 72.5218 51.0417 72.9865 48.9994 72.9968Z"
              fill="#474646"
            />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default Slider

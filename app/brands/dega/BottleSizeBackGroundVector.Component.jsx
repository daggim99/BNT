import React from 'react'

function BottleSizeBackGroundVector() {
  return (
    <svg
      // width="1920"
      height="850"
      viewBox="0 0 1920 654"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-screen col-start-1 col-span-full row-start-1 row-span-full`}
    >
      <g filter="url(#filter0_d_65_4)">
        <path
          d="M-29 172.625V646H1948V108.607C1873.98 201.002 1640.42 312.876 1418.37 312.876C1196.31 312.876 1093.78 263.323 846.221 108.607C501.315 -106.943 69.3443 43.404 -29 172.625Z"
          fill="url(#paint0_linear_65_4)"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_65_4"
          x="-33"
          y="0"
          width="1985"
          height="850"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          {/* <feOffset dy="4" /> */}
          {/* <feGaussianBlur stdDeviation="2" /> */}
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_65_4"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_65_4"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_65_4"
          x1="960"
          y1="222.759"
          x2="960"
          y2="610.055"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D8F2F5" />
          <stop offset="1" stopColor="#D8F2F5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default BottleSizeBackGroundVector

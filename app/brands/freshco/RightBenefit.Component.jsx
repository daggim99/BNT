import React from 'react'

const rightBenefits = [
  {
    id: 'rb1',
    title: 'NUTRIENTS',
    sub: {
      sub1: 'Dietary fiver',
      sub2: 'Carbohydrate',
      sub3: 'Calories',
    },
    row: 1,
  },
  {
    id: 'rb2',
    title: 'Vitamins',
    sub: {
      sub1: 'Vitamin C',
      sub2: 'Vitamin B',
      sub3: 'Vitamin A',
    },
    row: 2,
  },
  {
    id: 'rb3',
    title: 'Minerals',
    sub: {
      sub1: 'Copper',
      sub2: 'Potassium',
      sub3: 'Magnesium',
    },
    row: 3,
  },
]

function RightBenefit() {
  return (
    <article
      className={`col-start-2 col-span-1 row-start-1 row-span-full grid grid-cols-1 grid-rows-1`}
    >
      <div
        className={`w-[60%] m-auto h-full col-start-1 justify-self-center self-center col-span-1 row-start-1 row-span-1 grid grid-cols-1 grid-rows-[0.3fr_1fr] gap-y-12`}
      >
        <div
          className={`self-end col-start-1 col-span-1 row-start-1 row-span-1`}
        >
          <h2 className={`text-[64px] text-black font-lato-i700 italic`}>
            Benefits of freshco
          </h2>
        </div>
        <div
          className={`col-start-1 col-span-1 row-start-2 row-span-1 grid grid-cols-1 grid-rows-3 gap-y-6`}
        >
          {rightBenefits.map((benefit) => {
            return (
              <div
                key={benefit.id}
                className={`col-start-1 col-span-1 justify-self-center row-start-${benefit.row} row-span-1 grid grid-cols-1 grid-rows-[36px_min-content] gap-y-4`}
              >
                <div
                  className={`col-start-1 col-span-1 row-start-1 row-span-1`}
                >
                  <h1
                    className={`text-black text-[30px] font-lato-i900 font-bold uppercase`}
                  >
                    {benefit.title}
                  </h1>
                </div>
                <div
                  className={`ml-12 self-end col-start-1 col-span-1 row-start-2 row-span-1 grid grid-cols-1 grid-rows-3 gap-y-4`}
                >
                  <div
                    className={`col-start-1 col-span-1 row-start-1 row-span-1 grid grid-cols-[min-content_min-content] gap-x-9`}
                  >
                    <div
                      className={`w-[33px] h-[33px] col-start-1 col-span-1 row-start-1 row-span-1`}
                    >
                      <svg
                        width="33"
                        height="31"
                        viewBox="0 0 33 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={``}
                      >
                        <path
                          d="M30.3894 1.34786C27.9347 0.133962 24.8429 0.923674 23.4849 3.10102L14.0597 18.1778L8.66555 13.3831C6.68304 11.6209 3.46939 11.6209 1.48688 13.3831C-0.495628 15.1453 -0.495628 18.0018 1.48688 19.764L11.6406 28.7892C12.6001 29.6444 13.8947 30.1137 15.2299 30.1137L15.9331 30.0686C17.5094 29.8723 18.8929 29.0307 19.6671 27.7919L32.3592 7.48505C33.7223 5.30545 32.839 2.55951 30.3894 1.34786Z"
                          fill="#165424"
                        />
                      </svg>
                    </div>
                    <div
                      className={`w-[200px] col-start-2 col-span-1 row-start-1 row-span-1`}
                    >
                      <p className={`text-[28px] text-[#616161] font-lato`}>
                        {benefit.sub.sub1}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`col-start-1 col-span-1 row-start-2 row-span-1 grid grid-cols-[min-content_min-content] gap-x-9`}
                  >
                    <div
                      className={`col-start-1 col-span-1 row-start-1 row-span-1`}
                    >
                      <svg
                        width="33"
                        height="31"
                        viewBox="0 0 33 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={``}
                      >
                        <path
                          d="M30.3894 1.34786C27.9347 0.133962 24.8429 0.923674 23.4849 3.10102L14.0597 18.1778L8.66555 13.3831C6.68304 11.6209 3.46939 11.6209 1.48688 13.3831C-0.495628 15.1453 -0.495628 18.0018 1.48688 19.764L11.6406 28.7892C12.6001 29.6444 13.8947 30.1137 15.2299 30.1137L15.9331 30.0686C17.5094 29.8723 18.8929 29.0307 19.6671 27.7919L32.3592 7.48505C33.7223 5.30545 32.839 2.55951 30.3894 1.34786Z"
                          fill="#165424"
                        />
                      </svg>
                    </div>
                    <div
                      className={`w-[200px] col-start-2 col-span-1 row-start-1 row-span-1`}
                    >
                      <p className={`text-[28px] text-[#616161] font-lato`}>
                        {benefit.sub.sub2}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`col-start-1 col-span-1 row-start-3 row-span-1 grid grid-cols-[min-content_min-content] gap-x-9`}
                  >
                    <div
                      className={`col-start-1 col-span-1 row-start-1 row-span-1`}
                    >
                      <svg
                        width="33"
                        height="31"
                        viewBox="0 0 33 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={``}
                      >
                        <path
                          d="M30.3894 1.34786C27.9347 0.133962 24.8429 0.923674 23.4849 3.10102L14.0597 18.1778L8.66555 13.3831C6.68304 11.6209 3.46939 11.6209 1.48688 13.3831C-0.495628 15.1453 -0.495628 18.0018 1.48688 19.764L11.6406 28.7892C12.6001 29.6444 13.8947 30.1137 15.2299 30.1137L15.9331 30.0686C17.5094 29.8723 18.8929 29.0307 19.6671 27.7919L32.3592 7.48505C33.7223 5.30545 32.839 2.55951 30.3894 1.34786Z"
                          fill="#165424"
                        />
                      </svg>
                    </div>
                    <div
                      className={`w-[200px] col-start-2 col-span-1 row-start-1 row-span-1`}
                    >
                      <p className={`text-[28px] text-[#616161] font-lato`}>
                        {benefit.sub.sub3}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default RightBenefit

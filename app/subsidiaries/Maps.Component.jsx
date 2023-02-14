'use client'

import React from 'react'

import { motion } from 'framer-motion'

const locations = [
  {
    id: 'l1',
    name: 'Addis Abeba',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    phone1: '+251 900 112 233',
    phone2: '+251 900 112 233',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53020.96979717162!2d38.74432593566271!3d8.989885307765475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cd6dfc04d5%3A0x5169c0e5c4feb6b9!2sBnt%20Industry%20And%20Trading%20Plc!5e0!3m2!1sen!2set!4v1669642037911!5m2!1sen!2set',
  },
  {
    id: 'l2',
    name: 'Dese',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    phone1: '+251 900 112 233',
    phone2: '+251 900 112 233',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53020.96979717162!2d38.74432593566271!3d8.989885307765475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cd6dfc04d5%3A0x5169c0e5c4feb6b9!2sBnt%20Industry%20And%20Trading%20Plc!5e0!3m2!1sen!2set!4v1669642037911!5m2!1sen!2set',
  },
  {
    id: 'l3',
    name: 'Gonder',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    phone1: '+251 900 112 233',
    phone2: '+251 900 112 233',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53020.96979717162!2d38.74432593566271!3d8.989885307765475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cd6dfc04d5%3A0x5169c0e5c4feb6b9!2sBnt%20Industry%20And%20Trading%20Plc!5e0!3m2!1sen!2set!4v1669642037911!5m2!1sen!2set',
  },
]

function Maps() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: 0.5,
        type: 'spring',
        bounce: 0.4,
      }}
      className={`grid w-[80vw] mx-auto gap-9 `}
    >
      {locations.map((location) => {
        return (
          <div
            key={location.id}
            className={`h-[312px] grid grid-cols-[1fr_1fr] bg-[#D9D9D9] drop-shadow-[6px_8px_4px_rgba(0,0,0,0.25)]`}
          >
            <div
              className={`h-full col-start-1 col-span-1 grid grid-cols-[0.6fr_1fr] grid-rows-1`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.6, x: 341 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.7,
                  type: 'spring',
                  bounce: 0.4,
                }}
                className={` col-start-1 col-span-1 justify-self-center self-center`}
              >
                <svg
                  width="96"
                  height="144"
                  viewBox="0 0 96 144"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M95.2 50.1117C95.2 22.4357 73.8888 0 47.6 0C21.3112 0 0 22.4357 0 50.1117C0 60.041 2.788 69.2758 7.514 77.0646H7.4596C23.5076 103.516 47.6 143.176 47.6 143.176L87.7404 77.0646H87.6928C92.412 69.2758 95.2 60.041 95.2 50.1117ZM47.6 71.5881C36.3324 71.5881 27.2 61.9738 27.2 50.1117C27.2 38.2495 36.3324 28.6353 47.6 28.6353C58.8676 28.6353 68 38.2495 68 50.1117C68 61.9738 58.8676 71.5881 47.6 71.5881Z"
                    fill="#4A171E"
                  />
                </svg>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.6, x: -341 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: 0.5,
                  type: 'spring',
                  bounce: 0.4,
                }}
                className={`col-start-2 col-span-1 justify-self-start self-center grid grid-cols-1 grid-rows-3`}
              >
                <div
                  className={`col-start-1 col-span-1 row-start-1 row-span-1 justify-self-start self-center`}
                >
                  <h1
                    className={`text-[40px] text-black font-roboto-n700 font-bold text-left`}
                  >
                    {location.name}
                  </h1>
                </div>
                <div
                  className={`col-start-1 col-span-1 row-start-2 row-span-1 justify-self-center self-center`}
                >
                  <p
                    className={`text-left text-black font-roboto-n300 w-[348px] text-[24px]`}
                  >
                    {location.description}
                  </p>
                </div>
                <div
                  className={`col-start-1 col-span-1 row-start-3 row-span-1 justify-self-center self-center grid grid-cols-[60px_min-content] grid-rows-2`}
                >
                  <div
                    className={`w-[50px] col-start-1 col-span-2 row-start-1 row-span-2`}
                  >
                    <svg
                      width="45"
                      height="48"
                      viewBox="0 0 45 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M41.8447 26.4139C43.2572 14.8666 35.7049 4.27312 24.9761 2.75281C14.2473 1.2325 4.40474 9.36104 2.9922 20.9084C1.57966 32.4558 9.132 43.0492 19.8608 44.5695C30.5896 46.0898 40.4321 37.9613 41.8447 26.4139Z"
                        fill="#4A171E"
                      />
                      <path
                        opacity="0.2"
                        d="M18.1113 25.045C15.1654 24.8935 13.3695 27.9625 13.2928 28.0846C13.2081 28.272 13.1921 28.4027 13.1761 28.5334C13.3196 32.409 15.259 33.2156 15.3724 33.2982L15.7367 33.3498C29.2795 30.6823 32.79 21.6744 33.9548 18.7153C34.0475 18.4626 34.1322 18.2752 34.2089 18.1531C34.2169 18.0877 34.2856 18.031 34.2936 17.9657C34.3095 17.835 34.3175 17.7697 34.2728 17.6304C34.2201 17.5564 33.5205 15.1973 30.4357 14.1619C30.3143 14.1447 30.1322 14.1189 30.0028 14.167C29.9341 14.2238 27.7262 15.1074 26.606 18.2057C26.5214 18.3932 26.5501 18.6631 26.6475 18.8763C27.3088 20.0336 27.9909 21.5261 28.0404 22.1314C25.7236 25.9243 21.8622 27.7036 21.1864 27.6743C20.8142 27.6881 19.5905 26.5841 18.6337 25.3185C18.5282 25.1706 18.2934 25.0708 18.1113 25.045Z"
                        fill="#231F20"
                      />
                      <path
                        d="M16.8964 24.873C13.9505 24.7214 12.1546 27.7905 12.0779 27.9126C11.9933 28.1 11.9773 28.2306 11.9613 28.3613C12.1048 32.237 14.0442 33.0436 14.1576 33.1261L14.5218 33.1777C28.0646 30.5103 31.5751 21.5023 32.74 18.5433C32.8327 18.2905 32.9173 18.1031 32.994 17.981C33.002 17.9157 33.0707 17.8589 33.0787 17.7936C33.0947 17.6629 33.1027 17.5976 33.058 17.4583C33.0053 17.3844 32.3057 15.0252 29.2209 13.9898C29.0995 13.9726 28.9173 13.9468 28.7879 13.995C28.7192 14.0517 26.5113 14.9353 25.3912 18.0337C25.3065 18.2211 25.3353 18.4911 25.4327 18.7043C26.094 19.8615 26.7761 21.3541 26.8255 21.9593C24.5088 25.7522 20.6473 27.5316 19.9716 27.5023C19.5993 27.516 18.3757 26.412 17.4188 25.1464C17.3134 24.9985 17.0786 24.8988 16.8964 24.873Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div
                    className={`w-[261px] col-start-2 col-span-1 row-start-1 row-span-1`}
                  >
                    <p
                      className={`text-[32px] text-black text-left font-roboto-n700`}
                    >
                      {location.phone1}
                    </p>
                  </div>
                  <div
                    className={`w-[261px] col-start-2 col-span-1 row-start-2 row-span-1`}
                  >
                    <p
                      className={`text-[32px] text-black text-left font-roboto-n700`}
                    >
                      {location.phone2}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className={`h-full w-full col-start-2 col-span-1`}>
              <iframe
                key={location.id}
                loading="lazy"
                allowFullscreen
                referrerPolicy="no-referrer-when-downgrade"
                src={location.location}
                className={`w-full h-full`}
              />
            </div>
          </div>
        )
      })}
    </motion.section>
  )
}

export default Maps

'use client'

import React from 'react'

const locations = [
  {
    id: 'l1',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53020.96979717162!2d38.74432593566271!3d8.989885307765475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cd6dfc04d5%3A0x5169c0e5c4feb6b9!2sBnt%20Industry%20And%20Trading%20Plc!5e0!3m2!1sen!2set!4v1669642037911!5m2!1sen!2set',
    name: '',
    row: 1,
  },
  {
    id: 'l2',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53020.96979717162!2d38.74432593566271!3d8.989885307765475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cd6dfc04d5%3A0x5169c0e5c4feb6b9!2sBnt%20Industry%20And%20Trading%20Plc!5e0!3m2!1sen!2set!4v1669642037911!5m2!1sen!2set',
    name: 'Marketing Office',
    row: 2,
  },
  {
    id: 'l3',
    location:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53020.96979717162!2d38.74432593566271!3d8.989885307765475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cd6dfc04d5%3A0x5169c0e5c4feb6b9!2sBnt%20Industry%20And%20Trading%20Plc!5e0!3m2!1sen!2set!4v1669642037911!5m2!1sen!2set',
    name: 'Factory',
    row: 3,
  },
]

function Maps() {
  return (
    <article className={`grid grid-cols-1 grid-rows-3 gap-y-3`}>
      {locations.map((location) => {
        return (
          <>
            <iframe
              key={location.id}
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src={location.location}
              className={`col-start-1 col-span-1 row-start-${location.row} row-span-1 drop-shadow-sm w-full h-[330px]`}
            />
            {location.name ? (
              <div
                key={location.id}
                className={`col-start-1 col-span-full row-start-${location.row} row-span-1 bg-[#6A6262] opacity-50 grid grid-cols-1 grid-rows-1 transition-d hover:opacity-0 hover:-z-50 focus:opacity-0 focus:-z-50 hover:hidden focus:hidden`}
              >
                <p
                  className={`text-white m-auto text-[48px] justify-self-center self-center text-center leading-[57.6px] font-lato-n900 font-bold z-10 opacity-100 transition-d hover:opacity-0 hover:-z-50 focus:opacity-0 focus:-z-50 hover:hidden focus:hidden`}
                >
                  {location.name}
                </p>
              </div>
            ) : (
              ''
            )}
          </>
        )
      })}
    </article>
  )
}

export default Maps

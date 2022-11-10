import React from 'react'

export const businesses = [
  {
    id: 'b1',
    title: 'BNT Coffee',
    colStart: `1`,
    colEnd: `2`,
  },
  {
    id: 'b2',
    title: 'Ranger',
    colStart: `2`,
    colEnd: `3`,
  },
  {
    id: 'b3',
    title: 'BNT Transport',
    colStart: `3`,
    colEnd: `4`,
  },
  {
    id: 'b4',
    title: 'BNT Agriculture',
    colStart: `4`,
    colEnd: `5`,
  },
  {
    id: 'b5',
    title: 'Techachlo Real Estate',
    colStart: `5`,
    colEnd: `6`,
  },
  {
    id: 'b6',
    title: 'BNT Import',
    colStart: `6`,
    colEnd: `7`,
  },
  {
    id: 'b7',
    title: 'BNT Trading',
    colStart: `7`,
    colEnd: `8`,
  },
]

export const Others = () => {
  return (
    <ul className="h-[36vh] md:h-[24vh] lg:h-[16vh] overflow-hidden grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-7 lg:grid-rows-1 gap-2">
      {businesses.map((business) => {
        const { id, title, colStart, colEnd } = business
        return (
          <li
            key={id}
            className={`transition-d lg:col-start-${colStart} lg:col-end-${colEnd} self-stretch text-center align-middle justify-self-stretch p-3 md:p-6 font-roboto-n500 text-sm sm:text-base hover:scale-95 hover:text-base hover:bg-slate-50`}
          >
            {title}
          </li>
        )
      })}
    </ul>
  )
}

export default Others

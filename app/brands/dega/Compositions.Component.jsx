import Image from 'next/image'

const elements = [
  {
    id: 'e1',
    name: 'Iron',
    symbol: 'Fe',
    width: '35vw',
    left: true,
    col: 1,
    row: 1,
  },
  {
    id: 'e2',
    name: 'Magnesium',
    symbol: 'Mg',
    width: '32vw',
    left: true,
    col: 1,
    row: 2,
  },
  {
    id: 'e3',
    name: 'Potassium',
    symbol: 'K',
    width: '30vw',
    left: true,
    col: 1,
    row: 3,
  },
  {
    id: 'e4',
    name: 'Calcium',
    symbol: 'Ca',
    width: '32vw',
    left: true,
    col: 1,
    row: 4,
  },
  {
    id: 'e5',
    name: 'Sodium',
    symbol: 'Na',
    width: '35vw',
    left: true,
    col: 1,
    row: 5,
  },
  {
    id: 'e6',
    name: 'Sodium',
    symbol: 'Na',
    width: '35vw',
    left: false,
    col: 3,
    row: 1,
  },
  {
    id: 'e7',
    name: 'Calcium',
    symbol: 'Ca',
    width: '32vw',
    left: false,
    col: 3,
    row: 2,
  },
  {
    id: 'e8',
    name: 'Potassium',
    symbol: 'K',
    width: '30vw',
    left: false,
    col: 3,
    row: 3,
  },
  {
    id: 'e9',
    name: 'Magnesium',
    symbol: 'Mg',
    width: '32vw',
    left: false,
    col: 3,
    row: 4,
  },
  {
    id: 'e10',
    name: 'Iron',
    symbol: 'Fe',
    width: '35vw',
    left: false,
    col: 3,
    row: 5,
  },
]

function Compositions() {
  return (
    <article className={`grid grid-cols-3 grid-rows-5 gap-y-12`}>
      {elements.map((element) => {
        const w = element.width
        return (
          <div
            key={element.id}
            style={{ width: element.width }}
            className={`lg:h-[130.05px] ${
              element.left ? 'rounded-r-full' : 'rounded-l-full'
            } ${
              element.left ? 'justify-self-start' : 'justify-self-end'
            } col-start-${element.col} col-span-1 row-start-${
              element.row
            } row-span-1 grid grid-cols-2 grid-rows-1 bg-[#EEF5F8]`}
          >
            <div
              className={`self-center ${
                element.left
                  ? 'justify-self-end col-start-1 col-span-1 row-start-1 row-span-1'
                  : 'justify-self-start col-start-2 col-span-1 row-start-1 row-span-1'
              }`}
            >
              <p
                className={`font-roboto-n300 text-[36px] text-black ${
                  element.left ? 'text-right' : 'text-left'
                }`}
              >
                {element.name}
              </p>
            </div>
            <div
              className={`self-center ${
                element.left
                  ? 'justify-self-end col-start-2 col-span-1 row-start-1 row-span-1'
                  : 'justify-self-start col-start-1 col-span-1 row-start-1 row-span-1'
              } lg:w-[101.04px] lg:h-[101.04px] rounded-full bg-white grid ${
                element.left ? 'mr-6' : 'ml-6'
              }`}
            >
              <h2
                className={`justify-self-center self-center text-[48px] text-center text-[#707070] font-roboto-n900 font-bold`}
              >
                {element.symbol}
              </h2>
            </div>
          </div>
        )
      })}
      <figure
        className={`justify-self-center col-start-2 col-span-1 row-start-1 row-span-full lg:w-[400px] h-[923px]`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/degaWaterBottleWithSplash.png`}
          alt={`Dega Water Bottle`}
          className={`w-full h-full object-center overflow-visible object-contain`}
        />
      </figure>
    </article>
  )
}

export default Compositions

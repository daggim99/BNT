import Image from 'next/image'

const desc1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
const desc2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing'

const benefits = [
  {
    id: 'b1',
    description: desc1,
    icon: `/images/Brand/Dega/Icons/Heart.png`,
    alt: 'Heart Icon',
    col: 1,
    row: 1,
    width: 503,
    left: true,
  },
  {
    id: 'b2',
    description: desc1,
    icon: `/images/Brand/Dega/Icons/Muscle.png`,
    alt: 'Muscle Icon',
    col: 1,
    row: 2,
    width: 503,
    left: true,
  },
  {
    id: 'b3',
    description: desc1,
    icon: `/images/Brand/Dega/Icons/Kidney.png`,
    alt: 'Kidney Icon',
    col: 1,
    row: 3,
    width: 503,
    left: true,
  },
  {
    id: 'b4',
    description: desc2,
    icon: `/images/Brand/Dega/Icons/Time.png`,
    alt: 'Time Icon',
    col: 4,
    row: 1,
    width: 496.79,
    left: false,
  },
  {
    id: 'b5',
    description: desc2,
    icon: `/images/Brand/Dega/Icons/Face.png`,
    alt: 'Face Icon',
    col: 4,
    row: 2,
    width: 496.79,
    left: false,
  },
  {
    id: 'b6',
    description: desc2,
    icon: `/images/Brand/Dega/Icons/Dambel.png`,
    alt: 'Dambel Icon',
    col: 4,
    row: 3,
    width: 496.79,
    left: false,
  },
]

const Benefits = () => {
  return (
    <article
      className={`grid grid-cols-[min-content_150px_150px_min-content] grid-rows-3 gap-x-14`}
    >
      {benefits.map((benefit) => {
        return (
          <div
            key={benefit.id}
            className={`col-start-${benefit.col} col-span-1 row-start-${
              benefit.row
            } grid ${
              benefit.left
                ? 'grid-cols-[400px_120px]'
                : 'grid-cols-[120px_400px]'
            } grid-rows-1 gap-x-2`}
          >
            <div
              className={`self-center ${
                benefit.left
                  ? 'lg:w-[345.5px] justify-self-end text-right'
                  : 'lg:w-[330px] justify-self-start'
              } row-start-1 row-span-1 ${
                benefit.left
                  ? 'col-start-1 col-span-1'
                  : 'col-start-2 col-span-1'
              }`}
            >
              <p
                className={`text-[28px] text-[#464646] font-roboto leading-[32.81px]`}
              >
                {benefit.description}
              </p>
            </div>
            <figure
              className={`self-center row-start-1 row-span-1 ${
                benefit.left
                  ? 'col-start-2 col-span-1'
                  : 'col-start-1 col-span-1 '
              }`}
            >
              <Image
                width={100}
                height={100}
                src={benefit.icon}
                alt={benefit.alt}
                className={`object-contain`}
              />
            </figure>
          </div>
        )
      })}
      <div
        className={`-z-[5009] col-start-1 col-span-2 row-span-full bg-gradient-to-t from-[#D8F2F5] to-white`}
      ></div>
      <figure
        className={`justify-self-right w-[266px] h-[938px] overflow-visible col-start-2 col-span-2 row-span-full`}
      >
        <Image
          height={100}
          width={100}
          src="/images/Brand/Dega/degaWaterBottle.png"
          alt="Dega Water Bottle"
          className={`w-full h-full object-center overflow-visible object-cover`}
        />
      </figure>
    </article>
  )
}

export default Benefits

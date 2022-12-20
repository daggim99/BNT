import Image from 'next/image'

function BottleSizes() {
  return (
    <article
      className={`h-[849px] w-[809px] col-start-2 col-span-1 row-start-1 row-span-1 grid grid-cols-4 grid-rows-1`}
    >
      <figure
        className={`justify-self-end self-center w-[102px] h-[349px] col-start-1 col-span-1 row-start-1 row-span-1`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/degaWaterBottle.png`}
          alt={`Small Bottle`}
          className={`w-full h-full object-center object-contain`}
        />
      </figure>
      <figure
        className={`justify-self-center self-center w-[156px] h-[549px] col-start-2 col-span-1 row-start-1 row-span-1`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/degaWaterBottle.png`}
          alt={`Medium Bottle`}
          className={`w-full h-full object-center object-contain`}
        />
      </figure>
      <figure
        className={`justify-self-center self-center w-[194px] h-[715px] col-start-3 col-span-1 row-start-1 row-span-1`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/degaWaterBottle.png`}
          alt={`Big Bottle`}
          className={`w-full h-full object-center object-contain`}
        />
      </figure>
      <figure
        className={`justify-self-center self-center w-[240px] h-[849px] col-start-4 col-span-1 row-start-1 row-span-1`}
      >
        <Image
          width={100}
          height={100}
          src={`/images/Brand/Dega/degaWaterBottle.png`}
          alt={`Huge Bottle`}
          className={`w-full h-full object-center object-contain`}
        />
      </figure>
    </article>
  )
}

export default BottleSizes

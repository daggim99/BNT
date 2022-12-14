const Benefit = () => {
  return (
    <article className={`mb-36 grid grid-cols-1 grid-rows-2`}>
      <div className={`row-start-1 row-span-1`}>
        <h1
          className={`text-black text-[64px] text-center font-roboto-n900 font-bold`}
        >
          Benefits of <span className={`text-[#2497EA]`}>Dega</span>
        </h1>
      </div>
      <div
        className={`justify-self-center lg:w-[944px] row-start-2 row-span-1`}
      >
        <p className={`text-[28px] text-[#666666] font-roboto text-center`}>
          Bottled at the source from the cold, water-rich, heavenly and
          Naturally Bountiful Highlands (DEGA) of Debreberhan, Ethiopia.
        </p>
      </div>
    </article>
  )
}

export default Benefit

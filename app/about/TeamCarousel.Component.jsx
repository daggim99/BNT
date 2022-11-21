const TeamCarousel = () => {
  return (
    <section className={`grid grid-cols-2 grid-rows-2`}>
      <div
        className={`justify-self-center self-center col-start-1 col-end-2 row-span-full w-[188.88px] h-[188.88px] rounded-full border-none bg-[#D9D9D9]`}
      ></div>
      <div
        className={`self-center col-start-2 col-end-3 row-span-full gird grid-cols-1 grid-rows-2`}
      >
        <h1
          className={`row-start-1 row-end-2 text-[#000000] text-[40px] leading-[40px] font-lato-n700`}
        >
          First Name
        </h1>
        <p
          className={`row-start-2 row-span-1 font-roboto-n300 text-[#757575] text-[30px]`}
        >
          Job Position
        </p>
      </div>
    </section>
  )
}

export default TeamCarousel

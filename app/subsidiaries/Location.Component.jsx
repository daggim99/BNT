import React from 'react'

function Location() {
  return (
    <section className={`w-screen h-[190px] bg-[#D9D9D9] grid`}>
      <div className={`grid grid-cols-2 grid-rows-1`}>
        <div className={`col-start-1 col-span-1`}>
          <h1 className={`text-black text-[36px] font-roboto-n300`}>
            Location
          </h1>
        </div>
        <div className={`col-start-2 col-span-1`}>
          <select
            name="locations"
            id="locations"
            className={`w-[558px] h-[52px] border-black bg-white`}
          >
            <option value="addisabeba">Addis Abeba</option>
            <option value="dese">Dese</option>
            <option value="gonder">Gonder</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default Location

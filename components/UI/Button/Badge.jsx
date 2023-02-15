import Button from './Button'

export default function Badge() {
  return (
    <div className="z-[5099] position md:fixed bottom-[5%] right-0 w-40 hover:-mr-3 transition-d lg:w-45 lg:text-2xl h-[60px] p-0 rounded-full border-none">
      <Button
        className="text-white w-full bg-[#9B7608] text-base text-center border-none hover:font-roboto-n900 justify-end font-roboto-n700 capitalize px-3 py-2 rounded-l-box"
        title="Place an order"
      />
    </div>
  )
}

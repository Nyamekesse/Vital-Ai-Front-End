export default function CarouselCard() {
  return (
    <div className="vector flex flex-col self-stretch rounded-lg bg-blue-600 bg-clip-border w-full text-white shadow-md h-[11rem]">
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Medical Checks!
        </h5>
        <p className=" font-sans font-light leading-normal text-inherit text-sm antialiased">
          Get regular physical activity, such as walking, running, or yoga, for
          at least 30 minutes most days of the week.
        </p>
      </div>
    </div>
  )
}

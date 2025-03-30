function BookingCard({ img, text, btnTxt }) {
  return (
    <div className="w-full sm:w-[45%] lg:w-[32%] relative rounded-lg overflow-hidden mb-6 lg:mb-0">
      <img
        src={img}
        alt=""
        className="w-full h-64 object-cover brightness-50 rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h2 className="font-medium mb-2.5 text-white text-xl sm:text-2xl">
          {text}
        </h2>
        <button className="text-sm sm:text-base font-medium border-solid border-2 rounded-md p-2 w-24 bg-[#0e82fd] text-white border-[#0e82fd] transition duration-300 transform hover:-translate-y-1">
          <a href="#">{btnTxt}</a>
        </button>
      </div>
    </div>
  );
}
export default BookingCard;
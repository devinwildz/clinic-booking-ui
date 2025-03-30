function Sepcard({ imglink, imgtxt }) {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="shadow-2xl p-6 sm:p-8 w-24 sm:w-32 rounded-full">
        <img src={imglink} alt="" className="w-full h-auto" />
      </div>
      <p className="text-[#6B7280] text-sm sm:text-base font-medium text-center mt-4">
        <a href="#">{imgtxt}</a>
      </p>
    </div>
  );
}

export default Sepcard;
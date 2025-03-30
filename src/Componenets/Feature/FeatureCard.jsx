function FeatureCard({ icons, text }) {
  return (
    <div className="w-full sm:w-[48%] md:w-[30%] lg:w-[30%] flex justify-center mb-4 p-8 sm:p-12 rounded-lg cursor-pointer bg-[#15558d] transition-transform duration-300 hover:scale-105">
      <div className="flex flex-col gap-4 items-center">
        {icons}
        <p className="text-white text-lg sm:text-xl font-medium text-center">{text}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
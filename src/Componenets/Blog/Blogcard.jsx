function Blogcard({ image, text, links, description }) {
  return (
    <div className="w-full sm:w-[48%] lg:w-[31%] xl:w-[32%] h-[400px] sm:h-[450px] overflow-hidden rounded-lg relative group mb-6">
      <div className="thumbnail w-full h-full">
        <a
          href={links}
          className="block w-full h-full relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black after:opacity-50 group-hover:after:opacity-70 transition-all duration-300"
        >
          <img
            src={image}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            alt={text}
          />
        </a>
      </div>
      <div className="content absolute w-full bottom-0 left-0 p-4 sm:p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-[#c6c9d8] text-sm sm:text-base font-normal mb-2">{text}</p>
        <h4 className="text-lg sm:text-xl text-white font-medium mb-4">{description}</h4>
        <button className="text-sm sm:text-base border-[#0e82fd] text-white border-solid border-2 rounded-md p-2 w-28 sm:w-32 hover:bg-[#0e82fd] hover:border-[#0e82fd] transition duration-300 transform hover:-translate-y-1">
          <a href={links}>READ MORE</a>
        </button>
      </div>
    </div>
  );
}

export default Blogcard;
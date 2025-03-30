import { CiLocationOn } from 'react-icons/ci';

function DoctorsCard({
  profileImg,
  Name,
  Role,
  locations,
  profilebtn,
  Bookbtn,
}) {
  return (
    <div className="w-full sm:w-[46%] lg:w-[30%] xl:w-[23%] flex flex-col bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="profile mb-4">
        <img src={profileImg} alt="" className="w-full h-auto rounded-lg" />
      </div>
      <h4 className="text-lg font-semibold mb-1">{Name}</h4>
      <p className="text-sm font-normal text-slate-600 mb-2">{Role}</p>
      <div className="flex items-center mb-4">
        <CiLocationOn className="mr-1" />
        <p className="text-sm font-normal text-slate-600">{locations}</p>
      </div>
      <div className="flex gap-2 mt-auto">
        <button className="text-xs sm:text-sm font-medium border-solid border-2 rounded-md p-2 flex-grow bg-white text-[#0e82fd] hover:text-white hover:bg-[#0e82fd] border-[#0e82fd] transition duration-300 transform">
          <a href="#">{profilebtn}</a>
        </button>
        <button className="text-xs sm:text-sm font-medium border-solid border-2 rounded-md p-2 flex-grow bg-[#0e82fd] text-white border-[#0e82fd] transition duration-300 transform">
          <a href="#">{Bookbtn}</a>
        </button>
      </div>
    </div>
  );
}

export default DoctorsCard;
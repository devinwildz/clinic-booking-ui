import DoctorsCard from './DoctorsCard';

function Doctors() {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl text-[#272b41] font-medium mb-5 text-center">
        Book Our Doctor
      </h1>
      <div className="w-full max-w-full sm:max-w-[80%] lg:max-w-[50%] m-auto mb-10">
        <p className="text-center text-[#6B7280]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-wrap justify-start gap-6 sm:gap-8">
        <DoctorsCard
          profileImg="https://doccure-wp.dreamstechnologies.com/wp-content/themes/doccure/assets/images/dravatar-100x100.jpg"
          Name="Mubeen Javeed"
          Role="MRI Scans,Orthopedic"
          locations="India"
          profilebtn="View Profile"
          Bookbtn="Book Now"
        />
        <DoctorsCard
          profileImg="https://doccure-wp.dreamstechnologies.com/wp-content/themes/doccure/assets/images/dravatar-100x100.jpg"
          Name="Harshil Bodara"
          Role="Dentist"
          locations="India"
          profilebtn="View Profile"
          Bookbtn="Book Now"
        />
        <DoctorsCard
          profileImg="https://doccure-wp.dreamstechnologies.com/wp-content/themes/doccure/assets/images/dravatar-100x100.jpg"
          Name="Arik"
          Role="Physicians and surgeons"
          locations="India"
          profilebtn="View Profile"
          Bookbtn="Book Now"
        />
        <DoctorsCard
          profileImg="https://doccure-wp.dreamstechnologies.com/wp-content/themes/doccure/assets/images/dravatar-100x100.jpg"
          Name="Jahnvi Sharma"
          Role="Pediatricians, general"
          locations="India"
          profilebtn="View Profile"
          Bookbtn="Book Now"
        />
      </div>
    </div>
  );
}

export default Doctors;
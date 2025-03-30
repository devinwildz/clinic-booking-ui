import Sepcard from './Sepcard';

function Sepcs() {
  return (
    <div className="w-full max-w-[90%] lg:max-w-[80%] m-auto py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl text-[#272b41] font-medium mb-5 text-center">
        Clinic and Specialities
      </h1>
      <div className="w-full max-w-full sm:max-w-[80%] lg:max-w-[50%] m-auto mb-10">
        <p className="text-center text-[#6B7280]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
        <Sepcard
          imglink="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/10/specialities-01.png"
          imgtxt="Neurology"
        />
        <Sepcard
          imglink="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/10/specialities-02.png"
          imgtxt="Urology"
        />
        <Sepcard
          imglink="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/10/specialities-03.png"
          imgtxt="Dentist"
        />
        <Sepcard
          imglink="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/10/specialities-04.png"
          imgtxt="Orthopedic"
        />
        <Sepcard
          imglink="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/10/specialities-05.png"
          imgtxt="Cardiologist"
        />
      </div>
    </div>
  );
}

export default Sepcs;
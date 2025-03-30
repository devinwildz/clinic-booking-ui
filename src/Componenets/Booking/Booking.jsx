import BookingCard from '../BookingCard/BookingCard';

function Booking() {
  return (
    <div className="bg-[#f8f9fa] w-full">
      <div className="w-full max-w-[90%] lg:max-w-[80%] m-auto py-12 sm:py-20">
        <h1 className="text-3xl sm:text-4xl text-[#272b41] font-medium mb-5 text-center">
          What are you looking for?
        </h1>
        <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap lg:justify-between">
          <BookingCard
            Link="#"
            img="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/10/doctor-1.jpg"
            text="Visit a Doctor"
            btnTxt="Book Now"
          />
          <BookingCard
            Link="#"
            img="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2022/12/feature-06.jpg"
            text="Medical"
            btnTxt="Book Now"
          />
          <BookingCard
            Link="#"
            img="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2022/12/feature-03.jpg"
            text="Services"
            btnTxt="Book Now"
          />
        </div>
      </div>
    </div>
  );
}
export default Booking;
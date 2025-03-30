import Blogcard from './Blogcard';

function Blogs() {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl text-[#272b41] font-medium mb-5 text-center">
        Latest Blogs
      </h1>
      <div className="w-full max-w-full sm:max-w-[80%] lg:max-w-[50%] m-auto mb-10">
        <p className="text-center text-[#6B7280]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-6 sm:gap-6">
        <Blogcard
          image="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/11/blog-10.jpg"
          text="Doctor"
          description="Explore the benefits & challenges of virtual healthcare appointments, along with tips for making good... "
          links="#"
        />
        <Blogcard
          image="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/09/blog-02-1.jpg"
          text="Clinic"
          description="Uncover strategies to achieve a harmonious balance between professional and personal well-being.... "
          links="#"
        />
        <Blogcard
          image="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/09/blog-04.jpg"
          text="Clinic"
          description="Explore importance of quality sleep & learn tips to improve your sleep, ensuring raise-up refreshed... "
          links="#"
        />
        
      </div>
    </div>
  );
}

export default Blogs;
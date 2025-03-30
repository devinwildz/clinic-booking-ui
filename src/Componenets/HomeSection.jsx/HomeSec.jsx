import { motion } from 'framer-motion';

function HomeSec() {
  return (
    <div className="w-full min-h-[80vh] bg-slate-50 bg-[url('https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/11/banner-bg.png')] bg-center bg-no-repeat bg-cover relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
      <div className="relative py-16 px-4 sm:px-6 lg:px-12 lg:py-32 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#272b41] font-bold mb-6 leading-tight">
            Your Health, Our Priority
          </h1>
          <p className="text-[#6B7280] text-lg sm:text-xl font-normal mb-8 max-w-2xl mx-auto">
            Find and book appointments with top healthcare professionals in your area.
          </p>
          
          <div className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative w-full sm:w-1/4">
                <select
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-gray-700"
                >
                  <option value="" disabled selected>Location</option>
                  <option value="australia">Australia</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="russia">Russia</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search doctors, clinics, hospitals..."
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              <button className="w-full sm:w-auto px-8 py-3.5 bg-[#0e82fd] hover:bg-[#0e82fd]/90 text-white font-medium rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-0.5">
                Search Now
              </button>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { count: '1000+', label: 'Verified Doctors' },
              { count: '500+', label: 'Medical Specialties' },
              { count: '98%', label: 'Patient Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-3xl font-bold text-[#0e82fd] mb-2">{stat.count}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeSec;
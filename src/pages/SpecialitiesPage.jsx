import { motion } from 'framer-motion';

function SpecialitiesPage() {
  const specialities = [
    {
      id: 1,
      name: 'Cardiology',
      icon: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/10/specialities-05.png',
      description: 'Treatment of heart diseases and cardiovascular conditions',
      doctorsCount: 22
    },
    {
      id: 2,
      name: 'Neurology',
      icon: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/10/specialities-01.png',
      description: 'Diagnosis and treatment of nervous system disorders',
      doctorsCount: 18
    },
    {
      id: 3,
      name: 'Orthopedics',
      icon: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/10/specialities-04.png',
      description: 'Treatment of musculoskeletal system conditions',
      doctorsCount: 15
    },
    {
      id: 4,
      name: 'Pediatrics',
      icon: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/10/specialities-02.png',
      description: 'Medical care for infants, children, and adolescents',
      doctorsCount: 20
    },
    {
      id: 5,
      name: 'Dentistry',
      icon: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/10/specialities-03.png',
      description: 'Oral health care and dental procedures',
      doctorsCount: 25
    },
    {
      id: 6,
      name: 'Ophthalmology',
      icon: 'https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2021/10/specialities-01.png',
      description: 'Eye care and vision health services',
      doctorsCount: 12
    }
    // Add more specialties as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Specialities</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of medical specialties and expert healthcare services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialities.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
                    <img
                      src={specialty.icon}
                      alt={specialty.name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">
                  {specialty.name}
                </h2>
                
                <p className="text-gray-600 text-center mb-4">
                  {specialty.description}
                </p>
                
                <div className="text-center text-sm text-gray-500 mb-6">
                  {specialty.doctorsCount} Doctors Available
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-3 px-6 bg-[#0e82fd] text-white rounded-xl font-medium hover:bg-[#0e82fd]/90 transition-colors"
                >
                  View Doctors
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SpecialitiesPage;
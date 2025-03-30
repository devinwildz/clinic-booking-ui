import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaStar, FaLocationDot, FaStethoscope } from 'react-icons/fa6';

function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const specialties = [
    'All',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      image:
        'https://media.istockphoto.com/id/1861987838/photo/smiling-female-doctor-looking-at-camera-in-the-medical-consultation.jpg?s=1024x1024&w=is&k=20&c=MJrGMm-cijF5hK6i8JWR1OxR-UqC5JiIPXrY7OTeDd4=',
      rating: 4.8,
      reviews: 124,
      location: 'New York, USA',
      experience: '15 years',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      image:
        'https://images.unsplash.com/photo-1609188076864-c35269136b09?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.9,
      reviews: 98,
      location: 'Los Angeles, USA',
      experience: '12 years',
    },
    {
      id: 3,
      name: 'Dr. Emily Williams',
      specialty: 'Pediatrics',
      image:
        'https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4.7,
      reviews: 156,
      location: 'Chicago, USA',
      experience: '10 years',
    },
    // Add more doctors as needed
  ];

  const filteredDoctors =
    selectedSpecialty.toLowerCase() === 'all'
      ? doctors
      : doctors.filter(
          (doctor) =>
            doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find Doctors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book appointments with the best doctors and specialists in your area
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {specialties.map((specialty, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedSpecialty(specialty.toLowerCase())}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedSpecialty.toLowerCase() === specialty.toLowerCase()
                  ? 'bg-[#0e82fd] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {specialty}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {doctor.name}
                    </h2>
                    <p className="text-[#0e82fd] flex items-center gap-2">
                      <FaStethoscope />
                      {doctor.specialty}
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-gray-500 ml-1">
                      ({doctor.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <FaLocationDot className="mr-2" />
                    {doctor.location}
                  </div>

                  <p className="text-sm text-gray-600">
                    Experience: {doctor.experience}
                  </p>
                </div>

                <div className="mt-6 flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex-1 py-2 px-4 bg-white border-2 border-[#0e82fd] text-[#0e82fd] rounded-xl font-medium hover:bg-[#0e82fd] hover:text-white transition-colors"
                  >
                    View Profile
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex-1 py-2 px-4 bg-[#0e82fd] text-white rounded-xl font-medium hover:bg-[#0e82fd]/90 transition-colors"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorsPage;

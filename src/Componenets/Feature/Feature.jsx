import FeatureCard from './FeatureCard';
import { GiMedicines } from 'react-icons/gi';
import { FaHeartbeat } from 'react-icons/fa';
import { FaRegHospital } from 'react-icons/fa6';
import { FaPills } from 'react-icons/fa';
import { BsBuildingExclamation } from 'react-icons/bs';
import { FaBedPulse } from 'react-icons/fa6';

function Feature() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
      <h1 className="text-3xl sm:text-4xl text-[#272b41] font-medium mb-5 text-center">
        Available Features in Our Clinic
      </h1>
      <div className="w-full max-w-full sm:max-w-[80%] lg:max-w-[50%] m-auto mb-10">
        <p className="text-center text-[#6B7280]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <FeatureCard
          icons={<GiMedicines fill="white" size={40} />}
          text="Medical"
        />
        <FeatureCard
          icons={<FaHeartbeat fill="white" size={40} />}
          text="Operation"
        />
        <FeatureCard
          icons={<FaRegHospital fill="white" size={40} />}
          text="Laboratory"
        />
        <FeatureCard icons={<FaPills fill="white" size={40} />} text="ICU" />
        <FeatureCard
          icons={<BsBuildingExclamation fill="white" size={40} />}
          text="Test Room"
        />
        <FeatureCard
          icons={<FaBedPulse fill="white" size={40} />}
          text="Patient Ward"
        />
      </div>
    </div>
  );
}

export default Feature;
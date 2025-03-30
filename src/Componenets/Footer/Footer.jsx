import {
  FaLocationDot,
  FaPhoneVolume,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa6';
import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  return (
    <footer className="bg-slate-100">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
        <div className="flex flex-wrap justify-between gap-5 xl:gap-8">
          <div className="w-full sm:w-[48%] lg:w-[26%]">
            <div className="logo mb-5">
              <a href="#">
                <img
                  className="w-32 h-auto sm:w-40"
                  src="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2024/06/logo-01.svg"
                  alt="Logo"
                />
              </a>
            </div>
            <p className="text-[#6B7280]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-full sm:w-[48%] md:w-[50%] lg:w-[18%] flex flex-col gap-4">
            <h2 className="text-lg font-medium">Specialities</h2>
            {['Neurology', 'Cardiologist', 'Dentist', 'Urology'].map(
              (item, index) => (
                <p key={index} className="text-base text-[#6B7280]">
                  {item}
                </p>
              )
            )}
          </div>
          <div className="w-full sm:w-[48%] md:w-[47%] lg:w-[18%] flex flex-col gap-4">
            <h2 className="text-lg font-medium">Services</h2>
            {['Medical', 'Operation', 'Laboratory', 'ICU'].map(
              (item, index) => (
                <p key={index} className="text-base text-[#6B7280]">
                  {item}
                </p>
              )
            )}
          </div>
          <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[22%] flex flex-col gap-4">
            <h2 className="text-lg font-medium">Contact Us</h2>
            {[
              { icon: <FaLocationDot />, text: '3556 Beech Street, USA' },
              { icon: <FaPhoneVolume />, text: '+1 315 369 5943' },
              { icon: <FaEnvelope />, text: 'doccure@example.com' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {item.icon}
                <p className="text-base text-[#6B7280]">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="w-full md:w-[47%] lg:w-[32%] flex flex-col gap-4">
            <h2 className="text-lg font-medium">Newsletter</h2>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="text-base font-medium border-solid border-2 rounded-md p-2 w-full sm:w-24 bg-[#0e82fd] text-white border-[#0e82fd] transition duration-300 transform hover:-translate-y-1">
                Submit
              </button>
            </div>
            <div className="flex gap-2 mt-4 justify-center md:justify-start">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="group rounded-full border-2 border-[#0e82fd] bg-slate-200 p-3 cursor-pointer hover:-translate-y-1 transition duration-300 transform hover:border-[#0e82fd] hover:bg-[#0e82fd]"
                  >
                    <a href="#">
                      <Icon className="group-hover:fill-white" />
                    </a>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 w-full px-4 sm:px-6 lg:px-12 py-5">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#6B7280] text-sm sm:text-base text-center sm:text-left">
            © 2024 Doccure. All rights reserved.
          </p>
          <div className="flex gap-2.5 items-center">
            <p className="text-[#6B7280] text-sm sm:text-base">
              Terms and Conditions
            </p>
            <p className="text-[#6B7280]">|</p>
            <p className="text-[#6B7280] text-sm sm:text-base">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

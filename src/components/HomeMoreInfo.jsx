import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function HomeMoreInfo() {
  return (
   <div>
      <div className="flex items-center my-6">
         <hr className="flex-grow border-t border-gray-300" />
         <span className="mx-4 text-lg font-serif uppercase tracking-widest text-gray-700">
            Follow us on social media
         </span>
         <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-4">
         {/* Facebook */}
         <a
            href="https://www.facebook.com/interiorwise212"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition text-2xl"
         >
            <i className="fab fa-facebook"></i>
         </a>

         {/* Instagram */}
         <a
            href="https://www.instagram.com/interiorwise212/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition text-2xl"
         >
            <i className="fab fa-instagram"></i>
         </a>
      </div>

      <div className="bg-[#f3f0eb] text-[#111] px-6 py-12 text-lg mt-14">
         <div className="max-w-7xl mx-auto space-y-12">

            {/* About Us Section */}
            <div className="grid md:grid-cols-3 gap-8">
               <div className="text-2xl font-bold">
                  IW <span className="font-light">INTERIOR WISE</span>
               </div>
               <div className="md:col-span-1">
                  <h3 className="text-lg font-bold text-orange-600 mb-2">About Us</h3>
                  <p>
                  At Interior Wise Decorators, we bring spaces to life through complete 
                  interior décor planning tailored to your vision and lifestyle. With a 
                  passion for timeless design and functional beauty, our services span 
                  a wide spectrum — from re-upholstery, curtaining and blinds, to carpet 
                  and upholstery cleaning, wood restoration, and custom office furniture 
                  manufacturing. Whether you're refreshing a single room or redesigning 
                  an entire property, our experienced team ensures every detail is 
                  thoughtfully crafted and expertly executed. Trust us to transform your 
                  environment with creativity, quality, and care.
                  </p>
               </div>

               {/* Park Rynie Showroom */}
               <div>
                  <h3 className="text-lg font-bold text-orange-600 mb-2">
                  Park Rynie Showroom
                  </h3>
                  <p>
                  <a href="#" className="hover:underline">
                     212 Caine Rd, Park Rynie, Scottburgh, 4182 South Africa
                  </a>
                  </p>
                  <p>Tel: 039 978 3564</p>
                  <p>Email: interiorwisedec@gmail.com</p>
                  <h4 className="text-lg font-bold text-orange-600 mt-4 mb-1">
                  Trading Hours
                  </h4>
                  <p>Monday to Friday 7:30am – 5:00pm</p>
                  <p>Saturday 8:00am – 12:00pm</p>
               </div>
            </div> 

            {/* Social Media */}
            <div className="text-center mt-8">
               <div className="mb-4 text-lg font-medium uppercase tracking-widest">
                  Follow us on social media
               </div>
               <div className="flex justify-center gap-6">
                  <a href="https://www.facebook.com/interiorwise212" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-2xl text-white bg-gray-500 p-2 rounded-full hover:bg-blue-600 transition" />
                  </a>
                  <a href="https://www.instagram.com/interiorwise212/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl text-white bg-gray-500 p-2 rounded-full hover:bg-pink-500 transition" />
                  </a>
               </div>
            </div>

            {/* Footer */}
            <div className="text-center border-t border-gray-300 pt-6 mt-6 text-s text-gray-600">
               <p>
                  <a href="#" className="font-semibold">
                  © 2025 Interior Wise | All Rights Reserved |{" "}
                  </a>
                  <a href="#" className="underline">
                  Privacy Policy
                  </a>{" "}
                  | Designed by{" "}
                  <a href="#" className="font-semibold">
                  Khumbulani
                  </a>
               </p>
            </div>
         </div>
      </div>
   </div>  
   );
}

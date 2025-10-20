import React from 'react';
import HomeMoreInfo from './HomeMoreInfo';

function About() {
  const teamMembers = [
    {
      name: 'Ray Ramdial',
      role: 'Sole Proprietor',
      date: 'March 1993 – Current',
      img: 'https://media.licdn.com/dms/image/v2/C5103AQHiFkZHAEoRvg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516966441612?e=2147483647&v=beta&t=OFddC_PkbBNOJ-4s1dX69jtFInvjZMaNbwoAC3uFeHE',
    },
  ];

  return (
    <div className="text-[#111] px-6 py-16 text-sm bg-gray-50">
      {/* About Section */}
      <section className="max-w-5xl mx-auto mb-16 bg-white rounded-xl shadow-md p-8 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-red-400 rounded-t-xl" />

        <h2 className="text-3xl font-bold mb-6 text-center text-red-400">About Us</h2>

        <p className="mb-6 leading-relaxed text-gray-700 text-[1rem]">
          <span className="font-bold text-red-500">Interior Wise Decorators</span> specialises in
          <strong> complete interior décor solutions</strong> including bespoke furniture,
          re-upholstery, curtaining & blinds, as well as
          <strong> carpet and upholstery cleaning</strong>. We also offer expert
          <strong> wood restoration</strong> and manufacture high-quality office furniture.
          Whether residential or commercial, our experienced team handles every project with care,
          creativity, and professionalism — from planning to execution.
        </p>

        <blockquote className="italic text-center text-gray-600 border-l-4 border-red-400 pl-4">
          “With over 32 years in business, we have built a team of experienced staff who are
          passionate about our product and delivering excellent service.”
        </blockquote>
      </section>

      {/* Divider */}
      <div className="text-center my-16">
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h3 className="text-lg font-bold uppercase tracking-widest text-red-600">Our Team</h3>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
      </div>

      {/* Team Member Section */}
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
        <img
          src={teamMembers[0].img}
          alt={teamMembers[0].name}
          className="w-36 h-36 object-cover mx-auto mb-4 rounded-full border-4 border-red-300"
        />
        <h4 className="text-2xl font-semibold text-red-700 mb-1">{teamMembers[0].name}</h4>
        <h6 className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
          {teamMembers[0].role}
        </h6>
        <p className="text-xs text-gray-400">{teamMembers[0].date}</p>
      </div>

      <HomeMoreInfo />
    </div>
  );
}

export default About;

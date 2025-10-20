import React from 'react'
// import ReactLogo from '../assets/react.svg'; // image testing
import Location from '../assets/location.png';
import HomeMoreInfo from './HomeMoreInfo';

function Contact() {
  return (
    <div>
      <div className="flex max-w-6xl mx-auto p-6 gap-8">
        {/* Location image */}
        <div className='w-1/2'>
          <img
            src={Location} 
            alt="location" 
            className="rounded-lg object-cover h-full w-full"
          />
        </div>

        {/* Right: Form */}
        <form className="w-1/2 flex flex-col space-y-4 text-lg">
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
          <p>Please fill in the form below if you have any questions and we will get back to you as soon as possible.</p>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <input
            type="tel"
            placeholder="Phone Number (000) 000-0000"
            className="border border-gray-300 rounded px-3 py-2"
          />
    
          <input
            type="email"
            placeholder="Email (example@example.com)"
            className="border border-gray-300 rounded px-3 py-2"
          />

          <select className="border border-gray-300 rounded px-3 py-2">
            <option value="">Query Category: Please Select</option>
            <option>General Inquiry</option>
            <option>Product Support</option>
            <option>Feedback</option>
          </select>

          <textarea
            placeholder="Please explain your question below:"
            rows={4}
            className="border border-gray-300 rounded px-3 py-2 resize-none"
          ></textarea>

          <div>
            <label className="block mb-1 font-medium" htmlFor="file-upload">
              Please upload any images:
            </label>
            <input type="file" id="file-upload" className="block" />
          </div>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded transition"
          >
            Submit
          </button>
        </form>
      </div> 

      <HomeMoreInfo /> 
    </div>
    
  )
}

export default Contact;
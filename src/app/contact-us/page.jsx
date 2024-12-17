'use client';
import contact1 from '../../access/contact-us/contactUs.png'
import contact2 from '../../access/contact-us/contactUs2.png'
import Image from 'next/image';
import React, { useState } from 'react'
const HomePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // send email
    const response = await fetch('api/contact-us', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });


    const { success, error } = await response.json();

    if (success) {
      alert('Your inquiry has been submitted!');
    } else if (error) {
      console.error(error);
      alert('Error while submitting your inquiry: ', error);
    }

    setSubmitting(false);
  }

  return (
    <section className="p-8 bg-black border-b-2  ">
      <div className=" container grid grid-cols-1 lg:grid-cols-3 gap-8 items-center ">
        {/* Left Image */}
        <div className="hidden lg:block border-r-2 px-4">
          <Image src={contact1} alt='contactUs' width={300} height={300} className=' rounded-3xl' />
        </div>

        {/* Form Section */}
        <div className="col-span-1">
          <h1 className="text-3xl font-bold text-center mb-8 border-b-4 py-2  text-white">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-white">
                  First Name :
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  onChange={handleInputChange}
                  className="mt-2 block w-full px-4 py-3 border border-white rounded-lg  sm:text-sm transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-white">
                  Last Name :
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  onChange={handleInputChange}
                  className="mt-2 block w-full px-4 py-3 border border-white rounded-lg sm:text-sm transition duration-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white">
                  Email :
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleInputChange}
                  className="mt-2 block w-full px-4 py-3 border border-white rounded-lg sm:text-sm transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="number" className="block text-sm font-semibold text-white">
                  Phone Number :
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Enter your phone number"
                  onChange={handleInputChange}
                  className="mt-2 block w-full px-4 py-3 border border-white rounded-lg sm:text-sm transition duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white">
                Message :
              </label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="5"
                placeholder="Write your message here..."
                onChange={handleInputChange}
                className="mt-2 block w-full px-4 py-3 border border-white rounded-lg sm:text-sm transition duration-200"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className=" border-2 border-lemon text-white px-6 py-2 rounded-md hover:bg-lemon hover:text-black font-medium shadow-md transform transition hover:scale-105  focus:ring-4 focus:ring-blue-300 focus:outline-none "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block border-l-2 px-4 ">
          <Image src={contact2} alt='contactUs '  width={300} height={300} className=' rounded-3xl'/>
        </div>
      </div>
    </section>


  )
}

export default HomePage
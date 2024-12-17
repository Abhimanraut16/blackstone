'use client';
// import '@/app/contact/contact.css'
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import Image from 'next/image';
import order from '../../access/contact-us/contactUs.png'
const Order = () => {
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
    <section className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-gray-100 to-white rounded-lg shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
          Fill up the form to place an order
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <Image src={order} alt='order' width={400} height={400}/>
        </motion.div>

        {/* Form Section */}
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 col-span-1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="number" className="block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Enter your phone number"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter additional details"
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-400 focus:border-blue-400 sm:text-sm"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md transform transition hover:scale-105 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Place Order
            </button>
          </div>
        </motion.form>

      </div>
    </section>

  )
}

export default Order
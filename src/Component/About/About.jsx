import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="bg-white py-16 dark:bg-gray-900">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="About Us"
              className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Who We Are
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We are a team of passionate bibliophiles who believe in the power of books to change lives. Our platform is dedicated to making books accessible to everyone. Whether you're a casual reader or a book collector, we have something for you.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              With a vast library that spans across multiple genres and formats, our mission is to bring readers closer to the books they love and the ones they haven’t discovered yet. We offer personalized recommendations to ensure every book you find is one worth reading.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join us in our mission to create a global community of readers. Whether you're into the latest bestsellers or timeless classics, we make it easy to dive into the world of books.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

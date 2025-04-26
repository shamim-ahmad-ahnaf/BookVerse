import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Success message কিছু সময় পরে আবার ফর্ম দেখানোর জন্য (অপশনাল)
    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // 3 seconds
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-4xl w-full grid md:grid-cols-2 gap-8"
      >
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Let's Talk</h2>
          <p className="text-lg text-gray-700 mb-6">
            Have an idea in mind? Or just want to chat?  
            We’re here to help you bring your vision to life!
          </p>
          <div className="space-y-3">
            <p className="text-gray-700 font-semibold">📧 Email: contact@yourdomain.com</p>
            <p className="text-gray-700 font-semibold">📞 Phone: +123 456 7890</p>
          </div>
        </motion.div>

        {/* Right Side - Form / Success */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-800 mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/50 backdrop-blur-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="block text-gray-800 mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/50 backdrop-blur-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="block text-gray-800 mb-2 font-semibold">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Write your message..."
                  className="w-full p-3 rounded-lg bg-white/50 backdrop-blur-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-3 rounded-lg text-lg shadow-md"
              >
                Send Message
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="text-green-500 text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank you!</h3>
              <p className="text-gray-700">
                Your message has been sent successfully.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

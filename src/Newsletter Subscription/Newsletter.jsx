import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // এখানে ইমেল সাবমিট করা হবে বা API কল করা হবে
      setMessage('Thanks for subscribing! You will receive our updates soon.');
      setEmail('');
    } else {
      setMessage('Please enter a valid email.');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
        <p className="text-lg md:text-xl mb-8">
          Get the latest updates, new arrivals, and exclusive offers delivered right to your inbox.
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="flex justify-center gap-4">
          <input
            type="email"
            className="px-6 py-3 w-full md:w-1/3 rounded-lg border-none outline-none focus:ring-2 focus:ring-purple-500 bg-white text-gray-800"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe
          </button>
        </form>

        {/* Message */}
        {message && (
          <div className="mt-6 text-lg md:text-xl text-gray-900">
            {message}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsletterSubscription;

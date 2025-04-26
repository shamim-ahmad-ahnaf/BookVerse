import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.7,
    imgUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    price: "$10.99",
    description: "A classic novel set in the Roaring Twenties.",
    publisher: "Charles Scribner's Sons",
    reviews: [
      { user: "Alice", review: "A timeless classic!" },
      { user: "Bob", review: "Loved the atmosphere and characters." },
    ],
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    rating: 4.8,
    imgUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    price: "$12.99",
    description: "1984 is a dystopian novel set in a totalitarian society ruled by Big Brother.",
    publisher: "Secker & Warburg",
    reviews: [
      { user: "Charlie", review: "A chilling prediction of the future." },
      { user: "Dave", review: "Very powerful and thought-provoking." },
    ],
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.9,
    imgUrl: "https://images.unsplash.com/photo-1603575448360-6be3f1b57d5d",
    price: "$8.99",
    description: "A novel about racial injustice in the Deep South through a child's eyes.",
    publisher: "J.B. Lippincott & Co.",
    reviews: [{ user: "Eve", review: "Heartbreaking and inspiring." }],
  },
  {
    id: 4,
    title: "Moby Dick",
    author: "Herman Melville",
    rating: 4.6,
    imgUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    price: "$14.99",
    description: "The narrative of Captain Ahab’s obsessive quest to kill the white whale.",
    publisher: "Harper & Brothers",
    reviews: [{ user: "Frank", review: "A deep and complex story." }],
  },
];

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <section className="flex flex-col justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          404 - Book Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Sorry, the book you're looking for does not exist.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          ← Go Back
        </button>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
          
          {/* Book Image */}
          <img
            src={book.imgUrl}
            alt={book.title}
            className="w-full md:w-1/3 h-96 object-cover rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300"
          />
    
          {/* Book Information */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {book.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 italic">
              by {book.author}
            </p>

            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="text-yellow-400 text-2xl mr-2">
                {"★".repeat(Math.floor(book.rating))}
              </span>
              <span className="text-gray-700 dark:text-gray-400">
                ({book.rating})
              </span>
            </div>

            <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              {book.price}
            </p>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              {book.description}
            </p>

            {/* Publisher */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Published by: <span className="font-semibold">{book.publisher}</span>
            </p>

            {/* Reviews */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Reviews:
              </h3>
              {book.reviews.map((review, index) => (
                <div
                  key={index}
                  className="border-t pt-4 mt-4 text-gray-600 dark:text-gray-300"
                >
                  <p>
                    <strong>{review.user}:</strong> {review.review}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-6 justify-center md:justify-start">
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold hover:bg-gray-400 dark:hover:bg-gray-600 transition"
              >
                ← Back
              </button>

              <button className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;

import { Link, useNavigate } from 'react-router-dom';

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.7,
    imgUrl: "https://via.placeholder.com/150",
    price: "$10.99",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    rating: 4.8,
    imgUrl: "https://via.placeholder.com/150",
    price: "$12.99",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.9,
    imgUrl: "https://via.placeholder.com/150",
    price: "$8.99",
  },
  {
    id: 4,
    title: "Moby Dick",
    author: "Herman Melville",
    rating: 4.6,
    imgUrl: "https://via.placeholder.com/150",
    price: "$14.99",
  },
];

const PopularBooks = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/cart');
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-10">
          Popular Books
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform flex flex-col"
            >
              <Link to={`/book/${book.id}`} className="block">
                <img src={book.imgUrl} alt={book.title} className="w-full h-64 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{book.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300 mb-4">by {book.author}</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-yellow-500 mr-2">{'★'.repeat(Math.floor(book.rating))}</span>
                    <span className="text-gray-700 dark:text-gray-400">({book.rating})</span>
                  </div>
                  <p className="text-lg font-bold text-gray-800 dark:text-white">{book.price}</p>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBooks;

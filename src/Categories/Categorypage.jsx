import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const booksData = {
  Fiction: [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel set in the Jazz Age that critiques the American Dream.',
      price: '$15.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c'
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel about totalitarian regime and surveillance.',
      price: '$12.50',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765'
    },
    
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel set in the Jazz Age that critiques the American Dream.',
      price: '$15.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c'
    },
    {
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel about totalitarian regime and surveillance.',
      price: '$12.50',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765'
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel set in the Jazz Age that critiques the American Dream.',
      price: '$15.99',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c'
    },
    
  ],
  'Non-Fiction': [
    {
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      description: 'A brief history of humankind exploring civilization and culture.',
      price: '$18.00',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136'
    },
    {
      title: 'Educated',
      author: 'Tara Westover',
      description: 'A memoir about a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the wider world through education.',
      price: '$14.50',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
    },
    {
      title: 'Becoming',
      author: 'Michelle Obama',
      description: 'A deeply personal memoir by the former First Lady of the United States.',
      price: '$16.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1587329310686-9232c1b469d4'
    },
    {
      title: 'The Immortal Life of Henrietta Lacks',
      author: 'Rebecca Skloot',
      description: 'The story of a woman whose cells changed medical research forever.',
      price: '$13.25',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794'
    },
    {
      title: 'When Breath Becomes Air',
      author: 'Paul Kalanithi',
      description: 'A memoir about a young neurosurgeon facing terminal cancer.',
      price: '$15.00',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1553729784-e91953dec042'
    }
  ],
  Mystery: [
    {
      title: 'The Girl with the Dragon Tattoo',
      author: 'Stieg Larsson',
      description: 'A thriller about a journalist and a hacker uncovering dark secrets.',
      price: '$14.99',
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1551029506-080b33c343d4'
    },
    {
      title: 'Gone Girl',
      author: 'Gillian Flynn',
      description: 'A psychological thriller exploring a marriage gone terribly wrong.',
      price: '$13.50',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e'
    },
    {
      title: 'Big Little Lies',
      author: 'Liane Moriarty',
      description: 'Secrets and scandals among a group of women in a coastal town.',
      price: '$12.99',
      rating: 4.3,
      image: 'https://images.unsplash.com/photo-1544717305-996b815c338c'
    },
    {
      title: 'Sharp Objects',
      author: 'Gillian Flynn',
      description: 'A reporter confronts psychological demons when she returns to her hometown.',
      price: '$11.75',
      rating: 4.2,
      image: 'https://images.unsplash.com/photo-1579372785062-46cc58d6ef4b'
    },
    {
      title: 'The Woman in the Window',
      author: 'A.J. Finn',
      description: 'A woman believes she has witnessed a crime in a neighboring house.',
      price: '$13.99',
      rating: 4.1,
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66'
    }
  ],
  Romance: [
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'A classic romantic novel about manners, upbringing, morality, and marriage.',
      price: '$9.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70'
    },
    {
      title: 'The Notebook',
      author: 'Nicholas Sparks',
      description: 'A love story spanning decades, filled with memories and emotions.',
      price: '$10.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1601200297700-9cfdbfeeb7c0'
    },
    {
      title: 'Outlander',
      author: 'Diana Gabaldon',
      description: 'A historical romance set in 18th-century Scotland.',
      price: '$12.50',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1528484709683-99c3ca4cba77'
    },
    {
      title: 'Me Before You',
      author: 'Jojo Moyes',
      description: 'An emotional romance story that challenges perceptions of love and life.',
      price: '$11.99',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1563201517-c012061db6b4'
    },
    {
      title: 'The Fault in Our Stars',
      author: 'John Green',
      description: 'Two teenagers meet at a cancer support group and fall in love.',
      price: '$10.75',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1553729784-e91953dec042'
    }
  ],
  Science: [
    {
      title: 'A Brief History of Time',
      author: 'Stephen Hawking',
      description: 'A landmark volume in science writing by one of the great minds of our time.',
      price: '$15.50',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581090700227-1b5f96399853'
    },
    {
      title: 'Cosmos',
      author: 'Carl Sagan',
      description: 'An exploration of science, civilization, and the universe.',
      price: '$16.99',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702'
    },
    {
      title: 'The Gene',
      author: 'Siddhartha Mukherjee',
      description: 'A history and exploration of the gene and its impact on our lives.',
      price: '$17.00',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1581091215367-59ab6fc3d62d'
    },
    {
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      description: 'A revolutionary look at evolution and natural selection.',
      price: '$13.99',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1526635391-7e9d618b98f4'
    },
    {
      title: 'The Origin of Species',
      author: 'Charles Darwin',
      description: 'The foundational text for evolutionary biology.',
      price: '$12.50',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1579372785062-46cc58d6ef4b'
    }
  ]
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const books = booksData[categoryName] || [];

  const handleViewDetails = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6 sm:px-12 md:px-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12 capitalize">
          {categoryName} Books
        </h2>
  
        <button
          onClick={handleBackClick}
          className="mb-10 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
        >
          ← Back
        </button>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white truncate">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{book.author}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                  {book.description}
                </p>
  
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-indigo-600">{book.price}</span>
                  <span className="text-sm text-yellow-500">⭐ {book.rating}</span>
                </div>
  
                <button
                  onClick={() => handleViewDetails(book)}
                  className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* Modal */}
      {showModal && selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl"
            >
              ×
            </button>
            <img
              src={selectedBook.image}
              alt={selectedBook.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{selectedBook.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedBook.author}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{selectedBook.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-indigo-600">{selectedBook.price}</span>
              <span className="text-yellow-500">⭐ {selectedBook.rating}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
  
};

export default CategoryPage;

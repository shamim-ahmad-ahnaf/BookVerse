import { useState } from "react";
import { SlBasket } from "react-icons/sl";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-3xl font-extrabold text-blue-600 dark:text-white tracking-wide">
          BookVerse
        </div>

        {/* Search Bar and Add to Cart Icon (Within the container) */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 4a7 7 0 100 14 7 7 0 000-14zm7 7l4 4"
              />
            </svg>
          </div>

          {/* Add to Cart Icon */}
          <button className="text-gray-700 dark:text-gray-300 focus:outline-none">
            <SlBasket className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

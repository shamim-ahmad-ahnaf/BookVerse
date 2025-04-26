const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-400 to-teal-500 text-white py-20">
      <div className="container mx-auto px-6 sm:px-12 flex flex-col items-center justify-center text-center">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Find Your Favorite Books
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto font-medium drop-shadow-sm">
          Explore a wide collection of books across different categories and genres.
        </p>

        {/* Search Box */}
        <div className="w-full max-w-xl">
          <form className="flex">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full sm:w-72 md:w-80 lg:w-96 justify-end px-5 py-3 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-r-lg hover:bg-gray-100 transition-colors"
            >
              Search
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Book, Search, Heart, Atom } from 'lucide-react';

const categories = [
  { name: 'Fiction', color: 'from-indigo-500 to-indigo-700', icon: BookOpen },
  { name: 'Non-Fiction', color: 'from-green-500 to-green-700', icon: Book },
  { name: 'Mystery', color: 'from-purple-500 to-purple-700', icon: Search },
  { name: 'Romance', color: 'from-pink-500 to-pink-700', icon: Heart },
  { name: 'Science', color: 'from-yellow-500 to-yellow-700', icon: Atom },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-14">
          Explore Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={index} to={`/category/${category.name}`}>
                <div className="relative group cursor-pointer">
                  <div
                    className={`rounded-2xl p-8 bg-gradient-to-r ${category.color} text-white shadow-2xl transform active:scale-95 group-hover:scale-105 group-hover:shadow-3xl group-hover:ring-4 group-hover:ring-white/40 transition-all duration-300 ease-in-out`}
                  >
                    <div className="flex flex-col items-center justify-center space-y-4 transition-transform group-hover:-translate-y-1">
                      <Icon size={36} className="opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                      <h3 className="text-lg font-semibold tracking-wide">{category.name}</h3>
                      <p className="text-xs mt-2 opacity-80 animate-pulse hidden sm:block">
                        Tap to explore
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white transition-all duration-300"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;

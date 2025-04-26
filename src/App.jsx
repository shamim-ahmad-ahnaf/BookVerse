import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Hero/Hero';
import Categories from './Categories/Categories';
import PopularBooks from './Popular/Popular';
import BookDetail from './Popular/BookDetail';
import NewsletterSubscription from './Newsletter Subscription/Newsletter';
import Footer from './Component/Navbar/footer/Footer';
import AboutSection from './Component/About/About';
import ContactSection from './contact/Contact';
import CategoryPage from './Categories/Categorypage';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={
            <>
              <Hero />
              <AboutSection />
              <Categories />
              <PopularBooks />
              <NewsletterSubscription />
              <ContactSection />
            </>
          } />
          
          {/* Book Detail Page */}
          <Route path="/book/:id" element={<BookDetail />} />
          
          {/* Category Page for individual category */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

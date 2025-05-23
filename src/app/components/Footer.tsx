import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-600 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About / Brand */}
        <div>
          <h4 className="text-xl font-bold mb-4">Your Brand</h4>
          <p className="text-sm">
            We offer quality products at affordable prices. Shop with us for an
            exceptional experience.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-bold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to get the latest updates straight to
            your inbox.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-3 py-2 rounded-md focus:outline-none bg-white shadow-sm border-1 border-gray-400 text-gray-800"
            />
            <button
              type="submit"
              className="bg-amber-700 px-4 py-2 rounded-md text-white font-bold"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Contact & Social Media */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p className="text-sm">123 Main Street, City, Country</p>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm mb-4">Phone: +1 (234) 567-8901</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

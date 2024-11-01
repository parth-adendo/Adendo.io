import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center md:text-left">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold mb-4 md:mb-0">Adendo</h1>
            <nav className="space-x-4">
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
              <a href="#" className="hover:text-gray-400">
                Services
              </a>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="mt-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

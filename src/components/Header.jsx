import React from "react";

const Header = () => {
  return (
    <header class="bg-white shadow">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-800">Adendo</div>

        <nav class="space-x-4">
          <a href="#" class="text-gray-600 hover:text-gray-800">
            Home
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            Services
          </a>
          <a href="#" class="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </nav>

        <a
          href="#"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="bg-gray-100 h-screen flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Welcome to My Website
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Discover amazing content and engage with our community.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-500">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;

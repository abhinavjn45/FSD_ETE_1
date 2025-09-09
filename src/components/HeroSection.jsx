import React from "react";

const HeroSection = () => (
  <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1457144759132-40d119c2f120?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
    {/* Transparent Header */}
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-6 bg-transparent z-10">
      <h1 className="text-white text-3xl font-bold">Dog Breed Management</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-white hover:underline">Home</a></li>
          <li><a href="#" className="text-white hover:underline">Breeds</a></li>
          <li><a href="#" className="text-white hover:underline">About</a></li>
        </ul>
      </nav>
    </header>
    {/* Hero Content */}
    <div className="flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-40">
      <h2 className="text-5xl font-extrabold mb-4">Find Your Favorite Dog Breed</h2>
      <p className="text-xl mb-8">Manage, explore, and discover dog breeds with ease.</p>
      <a href="#breeds" className="px-6 py-3 bg-white bg-opacity-80 text-black rounded-lg font-semibold hover:bg-opacity-100 transition">Get Started</a>
    </div>
  </div>
);

export default HeroSection;
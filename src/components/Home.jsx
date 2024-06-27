import React from "react";
import illstrationImage from "../assets/management-illustration.png";

const Home = ({ onClick }) => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center mt-10 md:mt-20 space-y-3 px-4">
      <img
        src={illstrationImage}
        alt="illustration image"
        className="h-40 w-40 md:h-60 md:w-60"
      />
      <h2 className="font-bold text-lg md:text-xl text-stone-600">
        No Project Selected
      </h2>
      <p className="text-stone-400 text-sm md:text-base">
        Select a project or get started with a new one
      </p>
      <button
        className="text-stone-300 bg-stone-700 rounded-md h-10 w-40 hover:bg-stone-600 hover:shadow-lg"
        onClick={onClick}
      >
        Create New Project
      </button>
    </div>
  );
};

export default Home;

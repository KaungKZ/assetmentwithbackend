import React from 'react';

const Card = ({ heading, tagline }) => {
  return (
    <div className="p-3 text-center text-black duration-300 rounded-lg shadow sm:p-6 bg-gray-50 hover:bg-gray-100">
      <p className="font-bold sm:text-2xl">{heading}</p>
      <p className="mt-1 text-sm sm:text-base">{tagline}</p>
    </div>
  );
};

export default Card;

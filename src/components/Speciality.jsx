import React from 'react';
import { specialityData } from '../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';

const Speciality = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-12" id='speciality'>
      <h1 className="text-3xl font-bold text-center mb-4">Find By Speciality</h1>
      <p className="text-center text-gray-700 mb-8">
        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">        
        {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0,0)} key={index} to={`/doctor/${item.speciality}`} className="flex flex-col items-center justify-center p-4 rounded-md hover:bg-gray-100 shadow-md">
            <img className="w-16 h-16 mx-auto mb-2 object-cover rounded-full" src={item.image} alt="" />
            <p className="text-center text-base font-medium">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
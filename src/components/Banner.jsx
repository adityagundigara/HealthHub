import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
    const navigate = useNavigate()
    return (

        <div className='relative py-5 px-4 md:py-8 md:px-4 rounded-lg bg-primary'>
            {/* Text Section */}
            <div className='flex flex-col items-start md:w-[65%] lg:w-[60%] lg:py-6 lg:px-4 xl:w-[70%]'>
                <h2 className='text-white text-xl font-bold mb-6 md:text-2xl lg:text-3xl xl:text-4xl'>Book Appointment</h2>
                <p className='text-white text-2xl font-medium mb-6 md:text-3xl lg:text-4xl xl:text-5xl'>With 100+ Trusted Doctors</p>
                <button onClick={()=>{navigate('/login');}} className='bg-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300'>
                    Create account
                </button>
            </div>

            {/* Image Section */}
            <div className='absolute bottom-0 right-0 md:w-[35%] lg:w-[40%] md:mr-2 lg:mr-0 xl:w-[30%] xl:mr-12'>
                <img src={assets.appointment_img} alt="Doctor pointing" className={'hidden md:block md:w-[220px] lg:w-[300px]'} />
            </div>
        </div>


    )
}

export default Banner

import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
    return (

        <footer className='px-2 py-10 mt-12 text-gray-700 sm:text-xl sm:text-gray-500 lg:text-gray-600 lg:text-lg'>
            <div className='w-full flex flex-col gap-12 lg:flex-row'>
                {/* left section */}
                <div className=' xl:w-[40%]'>
                    <img className='mb-4 lg:w-32 xl:w-[15vw]' src={assets.logo} alt="" />
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veritatis quisquam illum porro distinctio necessitatibus quaerat ipsa aperiam nihil fugiat, molestias magnam tempore laudantium laborum et nam dolorem exercitationem? Eos.</p>
                </div>

                {/* center section */}
                <div className=' flex flex-col items-center text-center xl:w-[30%] xl:pt-3'>
                    <p className='mb-3 font-bold sm:font-bold xl:text-xl xl:mb-4'>COMPANY</p>
                    <ul className='flex flex-col gap-2'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                {/* right section */}
                <div className='flex flex-col items-center text-center gap-2 xl:w-[30%] xl:pt-3 xl:mb-4'>
                    <p className='mb-3 font-bold sm:font-bold xl:text-xl'>GET IN TOUCH</p>
                    <p>+1-212-456-7890</p>
                    <p>adityagundigara07@gmail.com</p>
                </div>
            </div>
            <div className='text-center mt-8'>
                <hr className='h-[1px] bg-gray-700' />
                <p className='mt-2'>Copyright 2024 @Prescripto - All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer



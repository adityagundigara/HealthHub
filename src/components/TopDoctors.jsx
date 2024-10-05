import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className={'container flex flex-col items-center mx-auto my-5 py-8 px-4 md:px-8 lg:px-12'}>
            <h1 className={'text-3xl font-bold text-center mb-4'}>Top Doctors to Book</h1>
            <p className={'text-gray-700 text-center mb-12'}>Simply browse through our extensive list of trusted doctors</p>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5 '>
                {
                    doctors.slice(0, 10).map((item, index) => (
                        <div key={index} onClick={() => (navigate(`/appointment/${item._id}`))} className={'w-full flex flex-col items-center justify-center bg-gray-200 rounded-lg border-gray-300 border-[1px] cursor-pointer'}>
                            <img className={'w-[350px]'} src={item.image} alt="" />
                            <div className={'bg-white w-full text-center p-3 flex flex-col items-start'}>
                                <div className={'flex items-center justify-center gap-2 mb-2 sm:mb-3'}>
                                    <p className={'rounded-full bg-green-700 w-[5px] h-[5px]'}></p>
                                    <p className={'text-green-500 font-medium text-sm lg:text-xl xl:text-sm'}>Available</p>
                                </div>
                                <p className={'text-xl font-medium mb-1 sm:mb-1 xl:text-sm'}>{item.name}</p>
                                <p className={'text-gray-500 text-sm xl:text-sm'}>{item.speciality}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className={'bg-blue-100 px-10 py-3 text-xl font-medium rounded-full my-8 text-gray-700'} onClick={() => { navigate(`/doctors`); scrollTo(0, 0); }}>more</button>

        </div>
    )
}

export default TopDoctors

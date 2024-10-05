import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)

  const applyFilter = () => {
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else{
      setFilterDoc(doctors)
    }
  }

  useEffect( () => {
    applyFilter()
  },[speciality,doctors])

  return (
    <div className={`text-[3vw] flex flex-col items-start sm:text-[2vw] lg:text-[1vw]`}>
      <p className='text-lg mb-8'>Browse Through The Doctors Specialist.</p>
      <div className='w-full flex justify-between gap-2'>
        <div className={ `flex flex-col gap-3 text-center cursor-pointer`}>
          <p onClick={()=>{ speciality === 'General physician'? navigate('/doctor') : navigate('/doctor/General physician')}} className={ `border border-gray-500 rounded-sm px-4 py-1 sm:px-3 sm:py-1 md:px-6 lg:px-4 ${ speciality ==='General physician' ? "bg-indigo-50" : "" }`}>General Physician</p>
          <p onClick={()=>{ speciality === 'Gynecologist'? navigate('/doctor') : navigate('/doctor/Gynecologist')}} className={ `border border-gray-500 rounded-sm px-4 py-1 sm:px-3 sm:py-1 md:px-6 lg:px-4 ${ speciality === 'Gynecologist' ? "bg-indigo-50" : "" }`}>Gynecologist</p>
          <p onClick={()=>{ speciality === 'Dermatologist'? navigate('/doctor') : navigate('/doctor/Dermatologist')}} className={ `border border-gray-500 rounded-sm px-4 py-1 sm:px-3 sm:py-1 md:px-6 lg:px-4 ${ speciality === 'Dermatologist' ? "bg-indigo-50" : "" }`}>Dermatologist</p>
          <p onClick={()=>{ speciality === 'Pediatricians'? navigate('/doctor') : navigate('/doctor/Pediatricians')}} className={ `border border-gray-500 rounded-sm px-4 py-1 sm:px-3 sm:py-1 md:px-6 lg:px-4 ${ speciality === 'Pediatricians' ? "bg-indigo-50" : ""}`}>Pediatricians</p>
          <p onClick={()=>{ speciality === 'Neurologist'? navigate('/doctor') : navigate('/doctor/Neurologist')}} className={ `border border-gray-500 rounded-sm px-4 py-1 sm:px-3 sm:py-1 md:px-6 lg:px-4 ${ speciality === 'Neurologist' ? "bg-indigo-50" : ""}`}>Neurologist</p>
          <p onClick={()=>{ speciality === 'Gastroenterologist' ? navigate('/doctor') : navigate('/doctor/Gastroenterologist')}} className={ `border border-gray-500 rounded-sm px-4 py-1 sm:px-3 sm:py-1 md:px-6 lg:px-4 ${ speciality === "Gastroenterologist" ? "bg-indigo-50" : ""}`}>Gastroenterologist</p>
        </div>
        <div className='grid grid-cols-1 gap-y-8 gap-x-2 sm:grid-cols-2 sm:w-[55vw] sm:justify-items-end  lg:w-[80%] lg:gap-x-6 lg:gap-y-8 lg:grid-cols-4 lg:justify-items-end'>
          {
              filterDoc.map((item, index) => (
                <div key={index} onClick={() => (navigate(`/appointment/${item._id}`))} className={'w-[50vw] flex flex-col items-center justify-center bg-gray-200 rounded-lg border-gray-300 border-[1px] cursor-pointer sm:w-[25vw] lg:w-[15vw] xl:w-[15vw]'}>
                    <img className={'w-[350px] sm:w-[40vw] lg:w-[150px] xl:w-[20vw]'} src={item.image} alt="" />
                    <div className={'bg-white w-full p-3 flex flex-col items-start sm:p-4'}>
                        <div className={'flex items-center justify-center gap-2 mb-2 sm:m-0'}>
                            <p className={'rounded-full bg-green-700 w-[5px] h-[5px] lg:w-[4px] lg:h-[4px] xl:w-[5px] xl:h-[5px]'}></p>
                            <p className={'text-green-500 font-medium text-sm lg:text-[1vw] xl:text-lg '}>Available</p>
                        </div>
                        <p className={'text-[4vw] font-medium mb-1 sm:mb-0 sm:mt-2 xl:text-sm sm:text-[2vw] lg:text-[1.2vw] 2xl:text-[1.2vw] 2xl:mb-2'}>{item.name}</p>
                        <p className={'text-gray-500 text-sm xl:text-sm lg:text-[1vw] 2xl:w-[1vw]'}>{item.speciality}</p>
                    </div>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors






import React from 'react'
import {FiPlusCircle} from 'react-icons/fi'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import RequestViewCard from '../components/cards/RequestViewCard'
import {COLORS} from '../styles/colors/colors'

function CardsWrapper() {
  return (
    <>
    <div className='w-10/12 md:w-5/12 mx-auto cardGradient border-2 
                    rounded-lg flex flex-col items-center justify-between gap-3 px-3 py-6'>
      <RequestViewCard />   
      <RequestViewCard /> 
      <RequestViewCard /> 
      <RequestViewCard />      

      <hr className='mt-[20px] h-[3px] bg-primary w-full'/>

      <div className='flex justify-between items-center gap-6 mt-2'>

        <div className='flex items-center'>
        <div className='bg-white px-2 py-3'> 
           <FiPlusCircle size={25} color={COLORS.primary} className='hover:cursor-pointer'/>
        </div>
        <span className='ml-2 text-primary font-medium'>Top Up</span>
        </div>

        <div className='flex mx-2 items-center'>
        <div className='bg-white px-2 py-3'> 
        <AiOutlineMinusCircle size={25} color={COLORS.primary} className='hover:cursor-pointer'/>
        </div>
        <span className='ml-2 text-primary font-medium'>Widthd</span>
        </div>

      </div>

    </div>
    </>
  )
}

export default CardsWrapper
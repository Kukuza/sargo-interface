import React from 'react'
import { CARD_ICON } from '../../images';
import { IoStar } from "react-icons/io5";
import { COLORS } from '../../styles/colors/colors';
function RequestViewCard() {
  return (
    <div className='block h-[94px] w-[328px] cardGradient rounded-xl p-[10px]'>
        <div className='flex justify-center items-center'>
            <img
            className='w-[25px] h-[25px] roundex-xl object-cover mr-[5px]'
            src={CARD_ICON}
            alt='Icon'
            />
            <p className='body7 text-textDarkBlue mx-[12px]'>Deposit Request</p>
                <IoStar
                color={COLORS.textDarkBlue}
                />
                <span className="s5 text-textDarkBlue mr-[10px]">5.0</span>
                <span className='s5 text-accent1 font-sm mr-[5px]'>255 Ratings</span>
        </div>
        <div className='flex pl-[45px]'>
            <div>
            <p className='s4 text-textPrimary'>Amount</p>
            <span className='sh2 text-textPrimary'>Ksh 560.00</span>
            </div>
            <div className='h-[25px] w-[70px] border border-textPrimary rounded-xl p-[10px] flex justify-center items-center border-opacity-50 ml-auto mt-auto'>
                <span className='body6 text-accent1'>View</span>
            </div>
        </div>
    </div>
  )
}

export default RequestViewCard
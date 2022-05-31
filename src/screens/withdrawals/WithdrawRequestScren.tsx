import React from 'react'

import SwipeButton from '../../components/buttons/SwipeButton' // from dev branch
import DepositRequestCard from '../../components/cards/DepositRequestCard'

function WithdrawRequestScreen() {
  return (
    <div 
    className='w-[90vw] md:w-[40vw] py-8 mx-auto flex flex-col justify-center items-center gap-4 cardGradient rounded-2xl border-2 border-indigo-300'>
      <h3 className='font-medium'>Top up Request Summary</h3>

      <DepositRequestCard />
       
      <SwipeButton /> 
    </div>
  )
}

export default WithdrawRequestScreen
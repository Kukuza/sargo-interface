import React from 'react'

function BalanceCard() {
  return (
    <div className='block shadow-2xl h-[100px] w-[278px] rounded-xl p-[10px]'>
    <p className="body9 text-textPrimary mt-[10px]">Current Balance</p>
    <h1 className="font-bold text-textPrimary mt-[20px]">Ksh 567</h1>
    <h3 className="text-textPrimary mt-[30px]">5.67 cUSD</h3>
    </div>
  )
}

export default BalanceCard;
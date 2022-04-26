function DepositRequestCard() {
  return (
    <div className="block h-[408px] w-[344px] cardGradient  rounded-2xl p-[10px]">
      <p className='body4 text-textDarker mt-[5px]'>Withdraw Amount:</p>
      <h1 className='text-textPrimary mt-[5px]'>Ksh 1,000</h1>
      <p className='body4 text-textDarker mt-[30px]'>Fee:</p>
      <h3 className='text-black mt-[5px]'>Ksh 10</h3>
      <hr className='mt-[20px]'/>
        <p className='body4 text-textDarker mt-[30px]'>Total you Send:</p>
        <h1 className='text-textColor4 mt-[5px]'>cUSD 10.00</h1>
      <p className='s5 text-textPrimary mt-[50px]'>The Total amount will be sent from your wallet to the Wakala escrow account.</p>
    </div>
  )
}

export default DepositRequestCard;
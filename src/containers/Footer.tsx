import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1  w-[100%] h-[700px] lg:footerGrid'>
        <div className='border-2' >Kukuza</div>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4' >
            <div className='border-2'>Contact Us</div>
            <div className='border-2'>About Us</div>
            <div className='border-2'>Wakala</div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import MobileMenu from '../components/menu/MobileMenu'

function NavHeader() {
  return (
    <header className='w-full relative'>
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-6 mx-6'>
      <div>
      <a href='/' className='text-3xl text-primary font-medium'>wakala</a>
      </div>
      
      <nav className='flex flex-col md:flex-row justify-between'>
        <a href="/" className='mx-3 text-xl font-medium'>Home</a>
        <a href="/" className='mx-3 text-xl font-medium'>About Us</a>
        <a href="/" className='mx-3 text-xl font-medium'>Support</a>
        <a href="/" className='mx-3 text-xl font-medium'>Blog</a>
      </nav>

      <button className='px-6 rounded-3xl py-2 buttonGradient text-white'>Connect Wallet</button> 
      <MobileMenu />
    </div>
    </header>
  )
}

export default NavHeader
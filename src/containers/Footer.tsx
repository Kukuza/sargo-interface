import React from 'react'

function Footer() {
  return (
    // max-h-[804px] max-w-[1512px]
      <div className='mt-8 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 items-center'> {/**w-[90vw] mx-auto */}
      
      <div>
        <h6 className='mb-4'>Kukuza</h6>
        <p className='text-textDarkBlue'>
          Nothing herein constitutes an offer to sell, or the solicitation of an offer to buy, 
          any securities or tokens.
        </p>
        <p className='text-textDarkBlue mt-2'>
          Read more in <a href="/" className='text-primary'>Wakala Terms of Service</a>
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
      <div>
        <h6 className='mb-4 font-bold text-xl'>Links</h6>
        <a href="/" className='block'>Home</a>
        <a href="/" className='block'>Community</a>
        <a href="/" className='block'>Governance</a>
        <a href="/" className='block'>Blog</a>
        <a href="/" className='block'>About</a>
        <a href="/" className='block'>Documentation</a>
        <a href="/" className='block'>Support</a>
        <a href="/" className='block'>FAQ</a>
      </div>
      <div>
        <h6 className='mb-4 font-bold text-xl'>Socials</h6>
        <a href="/" className='block'>Medium(blog)</a>
        <a href="/" className='block'>Twitter</a>
        <a href="/" className='block'>Discord</a>
        <a href="/" className='block'>WhatsApp</a>
        <a href="/" className='block'>Telegram</a>
        <a href="/" className='block'>Youtube</a>
        <a href="/" className='block'>GitHub</a>
      </div>
      

      <div>
        <h6 className='mb-4 font-bold text-xl'>Resources</h6>
        <a href="/" className='block'>Documentation</a>
        <a href="/" className='block'>Brand Kit</a>
        <a href="/" className='block'>Agent Kit</a>
        <a href="/" className='block'>Event Kit</a>
      </div>
      </div>

      <div className='hidden md:inline-block'>&copy; 2022. All rights reserved</div>
    </div>
  )
}

export default Footer
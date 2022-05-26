import React from 'react'

import LOGO from "../images/footer/LOGO";

function Footer() {
  return (
    <div className='grid grid-cols-1  w-[100%] h-[804px] bg-white lg:footerGrid'>
        <div className='p-[15%] ' >
            <div className='my-[7%]'>
            <LOGO/>
            </div>
            <div className='body4 text-textDarkBlue my-[5%] lg:heading3 '>Nothing herein constitutes an offer to sell, or the solicitation of an offer to buy, any securities or tokens.</div>
            <div className='body4 text-textDarkBlue lg:heading3'>Read more in <span className='text-accent1 hover:cursor-pointer' >Kukuza Terms of Service.</span></div>
            <div className='hidden body3 text-textPrimary mt-[40%]'>© Kukuza 2022. All rights reserved</div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4' >
            <div className='p-[5%]'>
                <div className='display1 text-textBlack mt-[40%]'>Links</div>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Home</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Community</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Governance</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Blog</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>About</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Documetation</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Support</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>FAQ</h3>
            </div>
            <div className='p-[5%]'>
            <div className='display1 text-textBlack mt-[40%]'>Socials</div>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Medium(blog)</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Twitter</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Discord</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Whatsapp</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Telegram</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Youtube</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Github</h3>
            </div>
            <div className='p-[5%]'>
            <div className='display1 text-textBlack mt-[40%]'>Resources</div>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Documentation</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Brand Kit</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Agent Kit</h3>
                <h3 className='text-textBlack my-[5%] hover:underline cursor-pointer'>Event Kit</h3>
            </div>
        </div>
    </div>
  )
}

export default Footer
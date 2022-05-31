import React, {useState} from 'react'
import closeBtn from '../../images/drawer/close-btn.png'

function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuToggle = () => {
    setOpenMenu(openMenu => !openMenu)
  }
  
  return (

    <div className='flex flex-col gap-1 hover:cursor-pointer absolute md:hidden right-2 mr-3' 
         onClick={handleMenuToggle}>
      {!openMenu ?
      (<><span className='h-[2px] w-[30px] bg-[#111111]'></span>
        <span className='h-[2px] w-[30px] bg-[#111111]'></span>
        <span className='h-[2px] w-[30px] bg-[#111111]'></span>
        </>
        ):
        <img src={closeBtn} alt="close" />}
    </div>
  )
}

export default MobileMenu
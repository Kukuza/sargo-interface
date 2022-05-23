import React, {useState} from 'react'

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
        "X"}
    </div>
  )
}

export default MobileMenu
import React from 'react'

// To be reused under the main content
function MainContainer(props:any) {
  return (
    <div className='cardGradient py-8 w-full'>
        {props.children}
    </div>
  )
}

export default MainContainer
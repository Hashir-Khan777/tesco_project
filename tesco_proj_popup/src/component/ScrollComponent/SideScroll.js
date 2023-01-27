import React from 'react'

import './sidescroll.css'
const SideScroll = ({children}) => {
  return (
    <div className="fixed-side-scroll-container">
    {children}
     </div>
  )
}

export default SideScroll
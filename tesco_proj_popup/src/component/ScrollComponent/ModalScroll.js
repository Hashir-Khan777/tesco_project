import React from 'react'

import './modalScroll.css'
const ModalScroll = ({children}) => {
  return (
    <div className="fixed-modal-scroll-container">
    {children}
     </div>
  )
}

export default ModalScroll
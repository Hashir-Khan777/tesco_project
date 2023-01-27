import React from 'react'
import './scrollcomponent.css'
const ScrollComponent = ({children,styles}) => {
  return (
    <div className="fixed-scroll-container" style={styles}>
       {children}
        </div>
  )
}

export default ScrollComponent
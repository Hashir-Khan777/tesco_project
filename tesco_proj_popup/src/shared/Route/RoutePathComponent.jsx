import React from 'react'
import { Route, Routes } from 'react-router-dom'

const RoutePathComponent = ({path,component,id}) => {
  return (
    <React.Fragment>
      <Routes key={id}>
      <Route path={path}  element={component}/>
      </Routes>
    
    
    </React.Fragment>
  )
}

export default RoutePathComponent
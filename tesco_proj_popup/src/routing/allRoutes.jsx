import React from 'react'

import Dashboard from '../pages/dashboard/Dashboard'
import Login from '../pages/login/Login'

//admin route
export const authRoute=[
  {
    path:'/',
    component:<Login/>
  },
  {
    path:'dashboard',
    component:<Dashboard/>
  },
  {
    path:'teacher',
    component:<Dashboard/>
  },
  {
    path:'topic',
    component:<Dashboard/>
  },
  {
    path:'question-choice',
    component:<Dashboard/>
  },
  {
    path:'setting',
    component:<Dashboard/>
  }

]
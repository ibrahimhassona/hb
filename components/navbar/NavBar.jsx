import React from 'react'
import TopBar from './TopBar'
import Header from './Header'
const NavBar = ({props}) => {
  return (
      <div className='m-auto px-4 xl:px-40'>
        <TopBar props={props}/>
        <Header props={props}/>
      </div>

  )
}

export default NavBar
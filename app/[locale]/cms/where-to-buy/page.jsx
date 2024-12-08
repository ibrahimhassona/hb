import React from 'react'
import WhereToBuy from './WhereToBuy'
import NavBar from '@/components/navbar/NavBar'

const page = () => {
  return (
    <div>
        <NavBar  props={{ text: 'darkGray' }} />
        <WhereToBuy/>
    </div>
  )
}

export default page
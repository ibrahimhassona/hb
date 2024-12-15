import NavBar from '@/components/navbar/NavBar'
import FeatureContent from '@/components/products/FeatureContent'
import React from 'react'

const page = () => {

  return (
    <div>
        <NavBar props={{ text:'darkGray'}} />
        <FeatureContent />
    </div>
  )
}

export default page
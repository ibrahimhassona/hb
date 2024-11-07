import React from 'react'
import Card from './Card'
import { productsData } from '@/utils/static/dataStatic'

const ProductsComponent = ({className,searchParams}) => {
   console.log('a7a',searchParams)
    
  return (
    <div className={`${className} grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-center w-full  justify-items-center`}>
        {productsData.map((item,index)=>(<Card key={index} item={item}/>))}        
    </div>
  )
}

export default ProductsComponent
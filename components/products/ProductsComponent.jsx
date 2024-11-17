import React from 'react'
import Card from './Card'

const ProductsComponent = ({className,data}) => {
  return (
    <div className={`${className} grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 items-center w-full  justify-items-center`}>
        {data.map((item,index)=>(<Card key={index} item={item}/>))}        
    </div>
  )
}

export default ProductsComponent
import React from 'react'
import FilterAccourding from './FilterAccourding'
import ProductsComponent from './ProductsComponent'
import MobileFilter from './MobileFilter'
import Pagination from './Pagination'

const BrowseProducts = ({searchParams}) => {
    return (
        <>
            <div className='px-4 xl:px-40 bg-white flex max-md:flex-col max-md:justify-center items-start  gap-4 py-12'>
                {/* ===== Filter Accourding ====== */}
                <FilterAccourding className={`  max-md:hidden`} />
                <MobileFilter className={` hidden max-md:flex `} />
                {/* ===== Products ====== */}
                <ProductsComponent className={` flex-1 `} searchParams={searchParams}/>
            </div>
            <Pagination />
        </>
    )
}

export default BrowseProducts
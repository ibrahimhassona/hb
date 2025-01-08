import Link from 'next/link'
import React from 'react'

const ProductCategories = ({ categories }) => {
    return (
        <>
            {categories?.main ?

                categories?.main?.map((cat, index) => (
                    <Link
                        key={index}
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}products?sub-category=${cat?.slug}`}
                        className="text-primary font-semibold text-xs mb-2 bg-green-50 py-1 hover:shadow-sm cust-trans px-2 rounded-md"
                    >
                        {cat?.title}
                    </Link>
                ))

                : null
            }
            {categories?.sub ?
                categories?.sub?.map((cat, index) => (
                    <Link
                        key={index}
                        href={`${process.env.NEXT_PUBLIC_BASE_URL}products?sub-category=${cat?.slug}`}
                        className="text-primary text-xs mb-2 bg-green-50 py-1 hover:shadow-sm cust-trans px-2 rounded-md"
                    >
                        {cat?.title}
                    </Link>
                ))

                : null}
        </>
    )
}

export default ProductCategories
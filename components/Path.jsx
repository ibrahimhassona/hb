"use client"
import React from 'react'
import Link from 'next/link'

const Path = ({data,className}) => {
    return (
        <div className="flex items-center gap-2 max-md:text-sm py-4 max-sm:text-xs flex-wrap">
            {data.map((item, index) => (
                <React.Fragment key={index}>
                    {index === data.length - 1 ? (
                        // Last item - no link, no separator
                        <span className={`  ${className}`}>
                            {item.title}
                        </span>
                    ) : (
                        // Other items - with link and separator
                        <>
                            <Link
                                href={item.url}
                                className="text-primary hover:text-LightPrimary cust-trans"
                            >
                                {item.title}
                            </Link>
                            <span className="text-primary">/</span>
                        </>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Path
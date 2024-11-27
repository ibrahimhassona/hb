import React from 'react'

const ProductSkeleton = () => {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-md h-64 max-sm:h-[200px] bg-gray-200 animate-pulse">
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex justify-between items-start flex-col gap-1 border border-[#C0C0C0] p-2 rounded-md overflow-hidden bg-black/30 backdrop-blur-lg">
                    <div className="w-full flex items-center justify-between">
                        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                        <div className="flex gap-1">
                            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSkeleton



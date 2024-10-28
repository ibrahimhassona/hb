"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// ProductCard Component

const Card = ({ item }) => {
    return (
        <Link
            href={`/products/${item.slug}`}
            className="group relative flex flex-col w-full bg-white rounded-lg border border-gray-200 cust-trans hover:shadow-lg hover:border-emerald-500/20"
        >
            {/* ========= Images ========== */}
            <div className="relative w-full pt-[100%] rounded-t-lg overflow-hidden bg-gray-100">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover cust-trans group-hover:scale-105"
                />
            </div>
            {/* ============= Image ============= */}
            <div className="flex flex-col flex-grow p-4 space-y-3">
                {/* ====== Category ======= */}
                <div className="flex items-center gap-2 justify-between ">
                    <span className="text-xs font-bold text-primary">{item.category}</span>
                    {/*  ==== Price ===== */}
                    <span className="flex text-primary font-semibold max-md:text-xs">
                        {item.price} ر.س
                    </span>
                </div>

                {/* ====== Title ======= */}
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[40px]">
                    {item.title}
                </h3>
            </div>
        </Link>
    );
};

export default Card
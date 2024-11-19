"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaPlus, FaCheck } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { getData } from "@/utils/functions/getData";
import "ldrs/orbit";
import { orbit } from "ldrs";


const SoldTogether = ({ product }) => {

    useEffect(() => {
        if (typeof window !== 'undefined') {

            orbit.register();
        }
    }, [])
    const locale = useLocale();
    const t = useTranslations("product");

    // State Management
    const [selectedItems, setSelectedItems] = useState(new Set());
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(true);

    // Calculate Total Price
    const totalPrice = product?.bought_together.reduce(
        (sum, item) => (selectedItems.has(item.id) ? sum + item.price : sum),
        product.price
    );

    // Toggle Item Selection
    const toggleItem = (itemId) => {
        setSelectedItems((prev) => {
            const newSet = new Set(prev);
            newSet.has(itemId) ? newSet.delete(itemId) : newSet.add(itemId);
            return newSet;
        });
    };

    // Fetch Image URLs
    const imageUrl = async (slug) => {
        try {
            const data = await getData(locale, `products?filters[slug][$eq]=${slug}&populate=*`);
            return data[0]?.main_image?.url || null;
        } catch (error) {
            console.error(`Error fetching image for slug: ${slug}`, error);
            return null;
        }
    };

    useEffect(() => {
        const fetchAllImages = async () => {
            setLoading(true);
            try {
                const urls = await Promise.all(
                    product.bought_together.map((item) => imageUrl(item.slug))
                );
                setImageUrls(urls);
            } catch (error) {
                console.error("Error fetching images", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllImages();
    }, [product]);

    // Orbit Loader Styles
    const loaderStyles = {
        size: "35",
        speed: "1.5",
        color: "#2dbbab",
    };

    if (loading) {
        return <div className="w-full flex items-center justify-center"><l-orbit {...loaderStyles}></l-orbit></div>
    }
    return (<>
        <h2 className="text-darkGray font-semibold text-md mb-2 animate-flip-up cust-trans">{t("sold_together")}</h2>
        <div className="flex flex-col bg-gray-50/60 py-2 px-4 rounded-md gap-1 mb-5 border border-gray-200 ">
            <div className="flex items-center gap-4 bg-white p-4 rounded-md shadow-sm w-full justify-center">
                {product?.bought_together.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <div className="relative flex flex-col items-center ">
                            {/* Custom Checkbox */}
                            <button
                                onClick={() => toggleItem(item.id)}
                                className={`absolute top-1 right-1 w-5 h-5 rounded-sm border border-gray-600 flex items-center justify-center z-10 transition-colors ${selectedItems.has(item.id)
                                    ? "bg-primary border-primary"
                                    : "bg-[#ffffff9c] "
                                    }`}
                            >
                                {selectedItems.has(item.id) && (
                                    <FaCheck className="text-white text-xs" />
                                )}
                            </button>
                            {/* Product Card */}
                            <Link
                                href={`/products/${item.slug}`}
                                className="relative flex flex-col w-[90px] h-[110px] overflow-hidden bg-white rounded-md border-gray-300 shadow-md border cust-trans"
                            >
                                {/* Image Section */}
                                <div className="relative w-full h-[60%] rounded-t-md overflow-hidden bg-gray-100">
                                    <Image
                                        src={
                                            imageUrls[index]
                                                ? `${imageUrls[0]}`
                                                : `/isNoavilable-${locale}.png`
                                        }
                                        alt={item.title || "Product Image"}
                                        layout="fill"
                                        className="object-cover cust-trans"
                                    />
                                </div>

                                {/* Text Content Section */}
                                <div className="flex flex-col justify-center items-center h-[40%] text-center p-1">
                                    <h3 className="text-[9px] text-gray-900 font-semibold">
                                        {item.title.slice(0, 12)} {/* Reduced title length */}
                                    </h3>
                                    <span className="text-primary font-semibold text-[8px]">
                                        {item.price} {t("sar")}
                                    </span>
                                </div>
                            </Link>

                        </div>
                        {/* Plus Icon Between Products */}
                        {index < product.bought_together.length - 1 && (
                            <div className="flex items-center">
                                <FaPlus className="text-darkGray" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Total Price */}
            <div className="flex border border-gray-100 w-full rounded-md select-none h-full p-2 text-start items-center justify-between bg-white">
                <span className="text-sm">
                    {t("total_text")}{" "}
                    <span className="text-primary font-semibold animate-flip-up cust-trans">
                        {totalPrice.toLocaleString()}
                    </span>{" "}
                    {t("sar")}
                </span>
            </div>
        </div>
    </>
    );
};

export default SoldTogether;

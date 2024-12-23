import React, { useState } from 'react';
import {  FaFacebook, FaTwitter, FaSnapchat, FaCopy } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';

const SocialMediaShare = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false); // To handle copy success notification
    let currentUrl = '';
    if (typeof window !== 'undefined') {
        currentUrl = window.location.href;
    }
    const handleShare = async (platform) => {
        const encodedUrl = encodeURIComponent(currentUrl);
        switch (platform) {
            case 'facebook':
                window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
                );
                break;

            case 'twitter':
                window.open(
                    `https://twitter.com/intent/tweet?url=${encodedUrl}`
                );
                break;

            case 'snapchat':
                window.open(
                    `https://www.snapchat.com/share?url=${encodedUrl}`
                );
                break;

            case 'copy':
                try {
                    if (navigator.clipboard) {
                        await navigator.clipboard.writeText(currentUrl); // Modern clipboard API
                        setCopySuccess(true);
                        setTimeout(() => setCopySuccess(false), 2000); // Hide notification after 2 seconds
                    } else {
                        throw new Error('Clipboard API not supported');
                    }
                } catch (err) {
                    alert('Failed to copy the link. Please copy manually.');
                }
                break;

            default:
                break;
        }
        setIsDropdownOpen(false); // Close dropdown after action
    };

    let styleButton = 'flex items-center w-full px-2 py-2 hover:bg-green-200 rounded-md cust-trans'
    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-green-100 rounded-full text-primary h-[35px] w-[35px] shadow cursor-pointer cust-trans hover:bg-green-200 flex items-center justify-center"
            >
                <IoShareSocialOutline size={25} />
            </button>

            {isDropdownOpen && (
                <div className='absolute end-[40px] -top-2 mt-2 w-fit  bg-green-100  rounded shadow-md z-10 flex flex-col gap-1 justify-center items-center cust-trans animate-fade-up'>

                    <div className="flex p-1 gap-1">
                        <button
                            onClick={() => handleShare('facebook')}
                            className={styleButton}
                        >
                            <FaFacebook size={20} className="text-center text-blue-600" />
                        </button>
                        <button
                            onClick={() => handleShare('twitter')}
                            className={styleButton}
                        >
                            <FaTwitter size={20} className="text-center text-blue-400" />
                        </button>
                        <button
                            onClick={() => handleShare('snapchat')}
                            className={styleButton}
                        >
                            <FaSnapchat size={20} className="text-center text-yellow-400" />
                        </button>
                        <button
                            onClick={() => handleShare('copy')}
                            className={styleButton}
                        >
                            <FaCopy size={20} className="text-center" />
                        </button>
                    </div>
                </div>
            )}

            {/* Copy Success Notification */}
            {copySuccess && (
                <div className=" absolute end-[40px] -top-2 w-[200px] text-center bg-primary text-white py-2 text-sm rounded-md shadow-md">
                    تم نسخ الرابط إلى الحافظة !
                </div>
            )}
        </div>
    );
};

export default SocialMediaShare;

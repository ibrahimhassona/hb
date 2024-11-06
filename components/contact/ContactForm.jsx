"use client"
import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from 'react-icons/md';
import { MdDone } from "react-icons/md";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const ContactForm = () => {
  const [selectedReason, setSelectedReason] = useState('');

  const contactReasons = [
    { id: 'inquiry', label: 'استفسار' },
    { id: 'complaint', label: 'شكوى' },
    { id: 'cooperation', label: 'تعاون' },
    { id: 'other', label: 'أخرى' }
  ];

  return (
    <div className='flex flex-col w-full gap-6'> 
      {/* Previous form elements remain unchanged */}
      <div className='flex items-center gap-4 max-md:flex-col'>
        <div className='flex flex-col w-full relative'>
          <label htmlFor="fName" className='text-darkGray mb-1 text-sm font-semibold'>اسمك الأول<span className='text-red-500 font-bold'>*</span></label>
          <input name='fName' type='text' className=' rounded-md border border-gray-300 outline-none focus:border-primary cust-trans px-2 py-2 text-sm' placeholder='اكتب اسمك الأول' />
          <CiUser className=' absolute bottom-2 left-2 text-gray-400' size={20} />
        </div>
        <div className='flex flex-col w-full relative'>
          <label htmlFor="fName" className='text-darkGray mb-1 text-sm font-semibold'>اسمك الأخير<span className='text-red-500 font-bold'>*</span></label>
          <input name='fName' type='text' className=' rounded-md border border-gray-300 outline-none focus:border-primary cust-trans px-2 py-2 text-sm' placeholder='اكتب اسمك الأخير' />
          <CiUser className=' absolute bottom-2 left-2 text-gray-400' size={20} />
        </div>
      </div>
      <div className='flex flex-col w-full relative'>
          <label htmlFor="fName" className='text-darkGray mb-1 text-sm font-semibold'>بريدك الإلكتروني<span className='text-red-500 font-bold'>*</span></label>
          <input name='fName' type='text' className=' rounded-md border border-gray-300 outline-none focus:border-primary cust-trans px-2 py-2 text-sm' placeholder='اكتب بريدك الإلكتروني' />
          <MdOutlineEmail className=' absolute bottom-2 left-2 text-gray-400' size={20}/>
      </div>
      <div className='flex flex-col w-full relative'>
        <label htmlFor="fName" className='text-darkGray mb-1 text-sm font-semibold'> رقم جوالك<span className='text-red-500 font-bold'>*</span></label>
        <PhoneInput
          className=' rounded-md border border-gray-300 outline-none focus:border-primary cust-trans px-2 text-sm'
          defaultCountry="sa"
        />
      </div>
      
      {/* Message textarea */}
      <div className='flex flex-col w-full relative'>
        <label htmlFor="message" className='text-darkGray mb-1 text-sm font-semibold'>الرسالة (اختياري)</label>
        <textarea 
          name='message' 
          rows={4}
          className='rounded-md border border-gray-300 outline-none focus:border-primary cust-trans p-2 text-sm resize-none'
          placeholder='اكتب رسالتك'
          dir="rtl"
        />
      </div>

      {/* Updated Contact Reason with custom checkboxes and single selection */}
      <div className='flex flex-col w-full relative'>
        <label className='text-darkGray mb-3 text-sm font-semibold'>سبب التواصل (اختياري)</label>
        <div className='grid grid-cols-2 gap-y-3 text-sm'>
          {contactReasons.map((reason) => (
            <div key={reason.id} className='flex items-center gap-2'>
              <div
                onClick={() => setSelectedReason(reason.id)}
                className={`w-4 h-4 border cursor-pointer flex items-center justify-center transition-colors
                  ${selectedReason === reason.id ? 'border-primary bg-primary' : 'border-gray-300 bg-white'}`}
              >
                {selectedReason === reason.id && (
                  <MdDone className="text-white" size={14} />
                )}
              </div>
              <label 
                onClick={() => setSelectedReason(reason.id)}
                className='text-darkGray cursor-pointer'
              >
                {reason.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        className='w-full bg-primary text-white rounded-md py-3 text-sm font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2'
      >
        <span>إرسال الرسالة</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
          <path d="M5 12h14"/>
          <path d="m12 5 7 7-7 7"/>
        </svg>
      </button>
    </div>
  )
}

export default ContactForm
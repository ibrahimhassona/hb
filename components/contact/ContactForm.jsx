"use client"
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from 'react-icons/md';
import { MdDone } from "react-icons/md";
import { RiMailSendLine } from 'react-icons/ri';
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const ContactForm = () => {
  const loacle = useLocale()
  const [selectedReason, setSelectedReason] = useState('');
  const t = useTranslations("contactUs.form")
  const tR = useTranslations("contactUs.reasons")
  const contactReasons = [
    { id: 'inquiry', label: tR("inquiry") },
    { id: 'complaint', label: tR("complaint") },
    { id: 'cooperation', label: tR("cooperation") },
    { id: 'other', label: tR("other") }
  ];

  return (
    <div className='flex flex-col w-full gap-6'>
      {/* Previous form elements remain unchanged */}
      <div className='flex items-center gap-4 max-md:flex-col'>
        <div className='flex flex-col w-full relative'>
          <label htmlFor="fName" className='text-darkGray mb-1 text-sm font-semibold'>{t("first_name")}<span className='text-red-500 font-bold'>*</span></label>
          <input name='fName' type='text' className=' rounded-md border border-gray-300 outline-none focus:border-primary cust-trans px-2 py-2 text-sm' placeholder={t("first_name_placeholder")} />
          <CiUser className=' absolute bottom-2 end-2 text-gray-400' size={20} />
        </div>
        <div className='flex flex-col w-full relative'>
          <label htmlFor="fName" className='text-darkGray mb-1 text-sm font-semibold'>{t("last_name")}<span className='text-red-500 font-bold'>*</span></label>
          <input name='fName' type='text' className=' rounded-md border border-gray-300 outline-none focus:border-primary cust-trans px-2 py-2 text-sm' placeholder={t("last_name_placeholder")} />
          <CiUser className=' absolute bottom-2 end-2 text-gray-400' size={20} />
        </div>
      </div>
      <div className='flex flex-col w-full relative'>
        <label htmlFor="fName" className='text-darkGray mb-1 text-sm font-semibold'>{t("email")}<span className='text-red-500 font-bold'>*</span></label>
        <input name='fName' type='text' className=' rounded-md border border-gray-300 outline-none focus:border-primary cust-trans px-2 py-2 text-sm' placeholder={t("email_placeholder")} />
        <MdOutlineEmail className=' absolute bottom-2 end-2 text-gray-400' size={20} />
      </div>
      <div className='flex flex-col w-full relative' >
        <label htmlFor="fName" className='text-darkGray mb-1 text-sm font-semibold'>{t("phone")}<span className='text-red-500 font-bold'>*</span></label>
        <div dir='rtl'>
          
          <PhoneInput
            className=' rounded-md border border-gray-300 outline-none focus:border-primary cust-trans px-2 text-sm relative rtl-dropdown'
            defaultCountry="sa"
          />
        </div>
      </div>

      {/* Message textarea */}
      <div className='flex flex-col w-full relative'>
        <label htmlFor="message" className='text-darkGray mb-1 text-sm font-semibold'>{t("message")}</label>
        <textarea
          name='message'
          rows={4}
          className='rounded-md border border-gray-300 outline-none focus:border-primary cust-trans p-2 text-sm resize-none'
          placeholder={t("message_placeholder")}
        />
      </div>

      {/* Updated Contact Reason with custom checkboxes and single selection */}
      <div className='flex flex-col w-full relative'>
        <label className='text-darkGray mb-3 text-sm font-semibold'>{t("contact_reason")}</label>
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
        <span>{t("submit_button")}</span>
        <RiMailSendLine size={20} />
      </button>
    </div>
  )
}

export default ContactForm
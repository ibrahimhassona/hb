"use client"
import { useTranslations } from 'next-intl'
import React, { useEffect } from 'react'
import { helix } from 'ldrs'
import 'ldrs/helix'

const Loader = () => {
  const t = useTranslations('loader')

  useEffect(() => {
    // تسجيل helix في جانب العميل فقط
    if (typeof window !== 'undefined') {
      helix.register()
    }
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="p-8 flex flex-col items-center">
        <l-helix 
          size="120" 
          speed="2.5" 
          color="#2dbbab" 
        />
        <p className="mt-6 text-xl max-sm:text-base font-semibold text-[#2dbbab]">
          {t('text')}
        </p>
      </div>
    </div>
  )
}

export default Loader
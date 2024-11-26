import NavBar from '@/components/navbar/NavBar'
import Path from '@/components/Path'
import SearchContent from '@/components/products/search/SearchContent'
import { useTranslations } from 'next-intl'
import React from 'react'

const page = ({ locale, searchParams }) => {
    console.log(searchParams.result)
    return (
        <>
            <NavBar />
            <SearchContent value={searchParams} locale={locale} />
        </>
    )
}

export default page
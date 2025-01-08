import NavBar from '@/components/navbar/NavBar'
import Path from '@/components/Path'
import SearchContent from '@/components/products/search/SearchContent'
import React from 'react'

const page = ({ locale, searchParams }) => {
    return (
        <>
           <NavBar props={{ text: 'darkGray' }} />
            <SearchContent value={searchParams} locale={locale} />
        </>
    )
}

export default page
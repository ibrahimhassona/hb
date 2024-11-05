import NewsSection from '@/components/home/NewsSection'
import NavBar from '@/components/navbar/NavBar'
import NewsSinglePage from '@/components/news/NewsSinglePage'
import React from 'react'

const page = () => {
  return (
    <div>
        <NavBar/>
        <NewsSinglePage />
        <NewsSection/>
    </div>
  )
}

export default page
import NewsSection from '@/components/home/NewsSection'
import NavBar from '@/components/navbar/NavBar'
import NewsSinglePage from '@/components/news/NewsSinglePage'
import React from 'react'
import { getData } from '@/utils/functions/getData';
import Loader from '@/components/Loader';
import { htmlToText } from 'html-to-text';
// ================= Meta Data ==================
export async function generateMetadata({ params }) {
  const data = await getData('ar', `news?populate=*&filters[slug][$eq]=${params.news}`)
  // ---- KeyWords ----
  let metadata = {}
  // ---- Get Title Of Sub Categories ----
  metadata = {
    title: data && data[0]?.title ||'هيبنوتيك في المريخ' ,
    description: data && htmlToText(data[0]?.short_description),
    image: data[0]?.image[0]?.url,
    robots: "index, follow",
  }
  return metadata;
}

const page = async ({ params }) => {
  // -------- Data ----------
  const data = await getData('ar', `news?populate=*&filters[slug][$eq]=${params.news}`)
  console.log("data=====>",data[0]?.image[0]?.url)
  return (
    <>
      <NavBar props={{ text: 'darkGray' }} />
      {data ? <NewsSinglePage data={data[0]} /> : <Loader />}
      <NewsSection />
    </>
  )
}

export default page
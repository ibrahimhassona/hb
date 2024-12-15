import NavBar from '@/components/navbar/NavBar'
import FeatureContent from '@/components/products/FeatureContent'
import React from 'react'

// ================= Meta Data ==================
export async function generateMetadata({ params }) {
  const locale = params.locale;
  let metadata = {}
  if (locale == 'ar') {
    metadata = {
      title: 'المنتجات المميزة',
      description: 'المنتجات المميزة فى هيبنوتيك',
      charset: "UTF-8",
      robots: "index, follow",
    }
  } else {
    metadata = {
      title: 'Featured Products',
      description: 'Featured Products In Hypnotek',
      charset: "UTF-8",
      robots: "index, follow",
    }
  }
  return metadata;
}
const page = () => {

  return (
    <div>
      <NavBar props={{ text: 'darkGray' }} />
      <FeatureContent />
    </div>
  )
}

export default page
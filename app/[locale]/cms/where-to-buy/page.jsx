import React from 'react'
import WhereToBuy from './WhereToBuy'
import NavBar from '@/components/navbar/NavBar'
// ================= Meta Data ==================
export async function generateMetadata({ params }) {
  const locale = params.locale;
  let metadata = {}
  if (locale == 'ar') {
    metadata = {
      title: 'اين يمكننى الشراء',
      description: 'يمكنك الشراء من هذه الفروع الموجوده فى الخريطه او تواصل معنا ',
      charset: "UTF-8",
      robots: "index, follow",
    }
  } else {
    metadata = {
      title: 'Where can I buy',
      description: 'You can buy from these branches on the map or contact us',
      charset: "UTF-8",
      robots: "index, follow",
    }
  }
  return metadata;
}
const page = () => {
  return (
    <div>
        <NavBar props={{ text:'darkGray'}} />
        <WhereToBuy/>
    </div>
  )
}

export default page
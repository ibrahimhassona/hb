import React from 'react'
import ContactSocial from './ContactSocial'
import ContactForm from './ContactForm'

const ContactUsContent = () => {
  return (
    <div className='px-4 xl:px-40 grid grid-cols-2 gap-4 max-md:gap-8 max-md:grid-cols-1 my-12'>
        <ContactSocial/>
        <ContactForm/>
    </div>
  )
}

export default ContactUsContent
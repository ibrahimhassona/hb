import { useTranslations } from 'next-intl';
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


const ContactSocial = () =>{
  const t = useTranslations("contactUs")
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: t("email"),
      value: "info@hypnotek.com.sa",
    },
    {
      icon: FaPhone,
      label: t("phone"),
      value: "+9665 8175245 / 8433330",
      dir: "ltr",
    },
    {
      icon: FaMapMarkerAlt,
      label: t("main_location"),
      value: t("address"),
    },
  ];
  return(
  
  <section className="w-full bg-white text-darkGray">
    {/* Header */}
    <div className="text-start mb-6 text-darkGray">
      <h2 className="text-2xl font-bold mb-2">{t("stay_in_touch")}</h2>
      <p className="text-darkGray">{t("fill_form")}</p>
    </div>

    {/* Contact Information */}
    <div className="" >
      {contactInfo.map((item, index) => (
        <div key={index} className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="p-2 rounded-full  bg-green-100">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-primary font-semibold max-sm:text-sm text-md">{item.label}</p>
            <p className={`text-darkGray max-sm:text-sm ${item.dir ? `dir-${item.dir}` : ''}`}>
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}
export default ContactSocial;

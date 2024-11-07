import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "البريد الإلكتروني",
    value: "info@hypnotek.com.sa",
  },
  {
    icon: FaPhone,
    label: "رقم الهاتف",
    value: "+9665 8175245 / 8433330",
    dir: "ltr",
  },
  {
    icon: FaMapMarkerAlt,
    label: "الموقع الرئيسي",
    value: "٣٥٣٣ طريق الخرج القديم، الرياض، المملكة العربية السعودية",
  },
];

const ContactSocial = () => (
  <section className="w-full bg-white text-darkGray">
    {/* Header */}
    <div className="text-start mb-6 text-darkGray">
      <h2 className="text-2xl font-bold mb-2">ابق على تواصل</h2>
      <p className="text-darkGray">يسعدنا تواصلك معنا، يرجى ملء هذا النموذج</p>
    </div>

    {/* Contact Information */}
    <div className="" >
      {contactInfo.map((item, index) => (
        <div key={index} className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
          <div className="p-2 rounded-full  bg-green-100">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-primary font-semibold text-md">{item.label}</p>
            <p className={`text-darkGray ${item.dir ? `dir-${item.dir}` : ''}`}>
              {item.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ContactSocial;

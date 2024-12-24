"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { RiMailSendLine } from "react-icons/ri";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const locale = useLocale();
  const t = useTranslations("contactUs.form");
  const tR = useTranslations("contactUs.reasons");

  // ============== Validation Schema =========
  const contactValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(4, `${t("full_name_error")}`)
      .required(`${t("full_name_required")}`),
    lastName: Yup.string()
      .min(4, `${t("full_name_error")}`)
      .required(`${t("full_name_required")}`),
    email: Yup.string()
      .email(`${t("email_error")}`)
      .required(`${t("email_required")}`),
    phone: Yup.string()
      .matches(/^\+(?:[0-9]●?){6,14}[0-9]$/, `${t("phone_required")}`)
      .min(9, `${t("phone_required")}`)
      .required(`${t("phone_error")}`),
    message: Yup.string()
      .min(15, `${t("message_required")}`)
      .required(`${t("message_error")}`),
    reason: Yup.string().required(`${t("reason_required")}`),
  });

  const contactReasons = [
    { id: "inquiry", label: tR("inquiry") },
    { id: "complaint", label: tR("complaint") },
    { id: "cooperation", label: tR("cooperation") },
    { id: "other", label: tR("other") },
  ];

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "locale": locale },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        const data = await response.json();
        setError(data.error || t("error_message"));
      }
    } catch (err) {
      setError(t("error_message"));
    } finally {
      setLoading(false);
    }
  };
  let error_style = `text-red-500 text-xs mt-1 absolute top-full end-0 animate-fade-up cust-trans`
  let label_style =`text-darkGray mb-1 text-sm font-semibold`
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        reason: "",
      }}
      validationSchema={contactValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className="flex flex-col w-full gap-6">
          {/* Name fields */}
          <div className="flex items-center gap-4 max-md:flex-col">
            <div className="flex flex-col w-full relative">
              <label htmlFor="firstName" className={label_style}>
                {t("first_name")}
                <span className="text-red-500 font-bold">*</span>
              </label>
              <Field
                name="firstName"
                type="text"
                className="rounded-md border border-gray-300 outline-none focus:border-primary cust-trans px-2 py-2 text-sm"
                placeholder={t("first_name_placeholder")}
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className={error_style}
              />
              <CiUser className="absolute bottom-2 end-2 text-gray-400" size={20} />
            </div>
            <div className="flex flex-col w-full relative">
              <label htmlFor="lastName" className={label_style}>
                {t("last_name")}
                <span className="text-red-500 font-bold">*</span>
              </label>
              <Field
                name="lastName"
                type="text"
                className="rounded-md border border-gray-300 outline-none focus:border-primary cust-trans px-2 py-2 text-sm "
                placeholder={t("last_name_placeholder")}
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className={error_style}
              />
              <CiUser className="absolute bottom-2 end-2 text-gray-400" size={20} />
            </div>
          </div>

          {/* Email field */}
          <div className="flex flex-col w-full relative">
            <label htmlFor="email" className={label_style}>
              {t("email")}
              <span className="text-red-500 font-bold">*</span>
            </label>
            <Field
              name="email"
              type="email"
              className="rounded-md border border-gray-300 outline-none focus:border-primary cust-trans px-2 py-2 text-sm"
              placeholder={t("email_placeholder")}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={error_style}
            />
            <MdOutlineEmail className="absolute bottom-2 end-2 text-gray-400" size={20} />
          </div>

          {/* Phone field */}
          <div className="flex flex-col w-full relative">
            <label htmlFor="phone" className={label_style}>
              {t("phone")}
              <span className="text-red-500 font-bold">*</span>
            </label>
            <PhoneInput
              className="rounded-md border border-gray-300 outline-none focus:border-primary cust-trans px-2 text-sm relative rtl-dropdown"
              defaultCountry="sa"
              value={values.phone}
              onChange={(phone) => setFieldValue("phone", phone)}
            />
            <ErrorMessage
              name="phone"
              component="div"
              className={error_style}
            />
          </div>

          {/* Message textarea */}
          <div className="flex flex-col w-full relative">
            <label htmlFor="message" className={label_style}>
              {t("message")}
            </label>
            <Field
              as="textarea"
              name="message"
              rows={4}
              className="rounded-md border border-gray-300 outline-none focus:border-primary cust-trans p-2 text-sm resize-none"
              placeholder={t("message_placeholder")}
            />
            <ErrorMessage
              name="message"
              component="div"
              className={error_style}
            />
          </div>

          {/* Contact reason */}
          <div className="flex flex-col w-full relative">
            <label className="text-darkGray mb-3 text-sm font-semibold">{t("contact_reason")}</label>
            <div className="grid grid-cols-2 gap-y-3 text-sm">
              {contactReasons.map((reason) => (
                <div key={reason.label} className="flex items-center gap-2">
                  <div
                    onClick={() => setFieldValue("reason", reason.label)}
                    className={`w-4 h-4 border cursor-pointer flex items-center justify-center transition-colors
                      ${values.reason === reason.label ? "border-primary bg-primary" : "border-gray-300 bg-white"}`}
                  >
                    {values.reason === reason.label && <MdDone className="text-white" size={14} />}
                  </div>
                  <label onClick={() => setFieldValue("reason", reason.label)} className="text-darkGray cursor-pointer">
                    {reason.label}
                  </label>
                </div>
              ))}
            </div>
            <ErrorMessage
              name="reason"
              component="div"
              className={error_style}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-primary text-white rounded-md py-3 text-sm font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2 ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {loading ? t("sending") : <span>{t("submit_button")}</span>}
            <RiMailSendLine size={20} />
          </button>

          {/* Success and Error Messages */}
          {success && <div className="flex items-center gap-2">
            <p className="text-green-500 text-sm bg-green-100 w-fit py-2 px-4 animate-fade-up cust-trans rounded-md">{t("success_message")}</p>
            <p className="text-yellow-700 text-sm bg-yellow-100 w-fit py-2 px-4 animate-fade-up cursor-pointer cust-trans rounded-md" onClick={() => {
              const fields = ["reason", "firstName", "lastName", "email", "phone", "message"]
              fields.forEach(field => {
                setFieldValue(field, "");
              });
            }}>{t("reset")}</p>
          </div>}
          {error && <p className="text-red-500 text-sm bg-red-100 w-fit py-2 px-4 animate-fade-up cust-trans rounded-md">{error}</p>}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

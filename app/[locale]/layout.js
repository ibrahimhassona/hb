import NavBar from "@/components/navbar/NavBar";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arMainMetaData } from "@/utils/content/ar-content";
import { enMainMetaData } from "@/utils/content/en-content";
import { getMetadata } from "@/utils/getMetadata";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Tajawal, Poppins, Cairo } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Providers from "../providers";
// ---- Google Fonts ------
const cairo = Cairo({ subsets: ["arabic"], weight: ["200", "300", "400", "500", "700", "800", "900"] });
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["200", "300", "400", "500", "700", "800", "900"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "700", "800", "900"] });
// ------- Metadata Configration ---------
export function generateMetadata({ params }) {
  const locale = params.locale;
  const metadata = getMetadata(locale, enMainMetaData, arMainMetaData);
  return metadata;
}
// --------- Main Layout ---------
export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages(locale);
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={` m-auto relative bg-white ${locale === 'ar' ? cairo.className : cairo.className}`}>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}            
            <Footer />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

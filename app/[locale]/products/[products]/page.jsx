
import NavBar from "@/components/navbar/NavBar"
import ProductView from "./ProductView"
import { getData } from "@/utils/functions/getData";
import { htmlToText } from "html-to-text";

// ================= Meta Data ==================
export async function generateMetadata({ params }) {
  // ---- Locale ----
  const locale = params.locale;
  // ---- Fetch Sub Category ----
  const value = params.products;
  const data = await getData(locale, `products?populate=*&filters[slug][$eq]=${value}&filters[isVisible][$eq]=true`)
  // ---- KeyWords ----
  let metadata = {}
  // ---- Get Title Of Sub Categories ----
  metadata = {
    title: data && data[0]?.title ||( locale == "ar" ? 'منتج' : "Product"),
    description: data && htmlToText(data[0]?.short_description),
    image: data[0]?.images_url.split(",").length > 0 && data[0]?.images_url.split(",")[0],
    robots: "index, follow",
  }
  return metadata;
}

export default function CategoryPage({ params }) {
  const { products = null } = params



  return (
    <>
      <NavBar props={{ text: 'darkGray' }} />
      <ProductView slug={products} />
    </>
  )
}
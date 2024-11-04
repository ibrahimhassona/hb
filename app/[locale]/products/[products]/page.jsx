import FeaturedProducts from "@/components/home/FeaturedProducts"
import NavBar from "@/components/navbar/NavBar"
import Path from "@/components/Path"
import ProductAccordion from "@/components/product/ProductAccordion"
import ProductDetails from "@/components/product/ProductDetails"
import { productsData } from "@/utils/static/dataStatic"

export default function CategoryPage({ params }) {
  const { products } = params
  const productD = productsData.filter((item) => item.slug == products)
  console.log(productD[0].title)

  const dataPath = [{ title: 'الرئيسية', url: "" }, { title: 'المنتجات', url: "/products" }, { title: 'أجهزة التعطير الذكية', url: "/products" }, { title: productD[0].title, url: "" }]
  return (
    <>
      <NavBar />
      <div className="px-4 xl:px-40 my-8">
        <Path data={dataPath} />
        {/* ---- Part ---- */}
        <ProductDetails/>
        <ProductAccordion/>
      </div>
        <FeaturedProducts title="المنتجات المشابهة"/>
    </>
  )
}
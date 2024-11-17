
import NavBar from "@/components/navbar/NavBar"
import ProductView from "./ProductView"


export default function CategoryPage({ params }) {
  const { products =null } = params



  return (
    <>
      <NavBar />
      <ProductView slug={ products }/>
    </>
  )
}
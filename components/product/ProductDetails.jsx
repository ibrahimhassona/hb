import ContentProduct from "./ContentProduct";
import GalleryProduct from "./GalleryProduct";
const ProductDetails = ({ product }) => {

console.log("Product ======>" ,product)
  return (
    <div className="flex flex-row max-lg:flex-col justify-between gap-8  max-w-7xl ">
      {/* Gallery Section */}
      <GalleryProduct images={product?.images_url.split(',')} isFeature={product?.isFeature}/>
      {/* Content Section */}
      <ContentProduct product={product} />
    </div>
  );
};

export default ProductDetails;
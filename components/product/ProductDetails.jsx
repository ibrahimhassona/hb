import ContentProduct from "./ContentProduct";
import GalleryProduct from "./GalleryProduct";
const ProductDetails = ({ product }) => {


  return (
    <div className="flex flex-row max-lg:flex-col justify-between gap-8  max-w-7xl ">
      {/* Gallery Section */}
      <GalleryProduct images={product?.images} isFeature={product?.isFeature}/>
      {/* Content Section */}
      <ContentProduct product={product} />
    </div>
  );
};

export default ProductDetails;
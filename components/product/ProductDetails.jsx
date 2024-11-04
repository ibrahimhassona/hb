import ContentProduct from "./ContentProduct";
import GalleryProduct from "./GalleryProduct";


const ProductDetails = () => {


  return (
    <div className="flex flex-row max-lg:flex-col justify-between gap-8  max-w-7xl ">
      {/* Gallery Section */}
      <GalleryProduct />
      {/* Content Section */}
      <ContentProduct />
    </div>
  );
};

export default ProductDetails;
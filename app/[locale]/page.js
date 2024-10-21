import Landing from "@/components/home/Landing";
import MainCategories from "@/components/home/MainCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ShowSection from "@/components/home/ShowSection";
import NewsSection from "@/components/home/NewsSection";

export default function Home() {
  return (
    <div className="m-auto ">
      <Landing />
      <MainCategories />
      <FeaturedProducts />
      <ShowSection />
      <NewsSection />
    </div>
  );
}
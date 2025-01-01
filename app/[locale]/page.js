import Landing from "@/components/home/Landing";
import MainCategories from "@/components/home/MainCategories";
import ShowSection from "@/components/home/ShowSection";
import NewsSection from "@/components/home/NewsSection";
import { useTranslations } from "next-intl";
import SimilartProducts from "@/components/products/SimilartProducts";

export default function Home() {
  const t = useTranslations("main_categories")
  return (
    <main className="m-auto">
      <Landing />
      <MainCategories />
      {/* ------ featured Section  -------- */}
      <SimilartProducts type="featured" url={`products?populate=*&filters[isFeature][$eq]=true&filters[isVisible][$eq]=true`} title={t("featured_products")} />
      {/* ------ featured Section  -------- */}
      <SimilartProducts type="category" url={`products?filters[sub_categories][slug][$eq]=offers&populate=*&filters[isVisible][$eq]=true`} slug={'offers'}  title={t("offers")} />
      <ShowSection />
      <NewsSection />
    </main>
  );
}
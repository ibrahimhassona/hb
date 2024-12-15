import Landing from "@/components/home/Landing";
import MainCategories from "@/components/home/MainCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ShowSection from "@/components/home/ShowSection";
import NewsSection from "@/components/home/NewsSection";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("main_categories")
  return (
    <main className="m-auto">
      <Landing />
      <MainCategories />
      <FeaturedProducts title={t("featured_products")} />
      <ShowSection />
      <NewsSection />
    </main>
  );
}
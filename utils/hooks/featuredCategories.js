import { useQuery } from "@tanstack/react-query";
import { getData } from "../functions/getData";

export const useSubCategories = (locale) => {
  const url = `sub-categories?populate=*`;
  return useQuery({
    queryKey: ['SubCategories', locale],
    queryFn: () => getData(locale, url),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
  });
};

export const getFeaturedCategories = (locale) => {
  const { data: allData, isLoading, isError } = useSubCategories(locale);

  // Handle loading and error states
  if (isLoading || isError) return [];

  // Filter and return the featured categories
  const featuredCategories = allData?.filter((cat) => cat.isFeatured) || [];
  return featuredCategories;
};

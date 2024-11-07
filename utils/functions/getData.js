export const getData = async (locale,endPoint) => {
  const base_Url = process.env.NEXT_PUBLIC_BASE_API_URL
    try {
      const url = `${base_Url}/${endPoint}&locale=${locale}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Fetch error:', error);
      return null;
    }
  };
  
"use server"
export const getProducts = async (locale, endPoint) => {
  const base_Url = process.env.NEXT_PUBLIC_BASE_API_URL
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  try {
    const url = `${base_Url}/${endPoint}&locale=${locale}`;
    const response = await fetch(url,{
      headers:{
        Authorization:`Bearer ${apiKey}`
      }
    });
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

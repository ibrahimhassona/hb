"use server"
export const getData = async (locale, endPoint) => {
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
    return data.data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};

// 129b023db835b0e93618a285b3ca53ac6bc3b217edf2cba235cd8e80d8af25d6807d29e7bba8de8360c70c8f7196d1c7d7c80b770706c4a2c2641dcdb1cae984727a40394171d4337b7b403bb2e66a61098e0655a86ff0fec948a32d95a8fa7cd625359925d74ce7ce95fc64aeb21f4f36f0d0e87909bd55ccbef8e060e7815e
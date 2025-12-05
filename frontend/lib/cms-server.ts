import qs from "qs";
import { QUERY_HOME_PAGE } from "./queries";

const BASE_URL = process.env.NEXT_API_URL;

export async function getHomePage() {
  const query = qs.stringify(QUERY_HOME_PAGE);
  const response = await getCMSData(`/api/home-page?${query}`);
  console.log("Home Page Data:", response.data);
  return response?.data;
}

export async function getCMSData(url: string) {
  try {
    const response = await fetch(`${BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error("Failed to fetch home page data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}

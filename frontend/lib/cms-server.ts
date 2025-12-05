import qs from "qs";
import { QUERY_HOME_PAGE } from "./queries";
import { transformHomePageData, HomePageData } from "../transformers/home";

const BASE_URL = process.env.NEXT_API_URL;

export async function getHomePage(): Promise<HomePageData | null> {
  const query = qs.stringify(QUERY_HOME_PAGE);
  const response = await getCMSData(`/api/home-page?${query}`);

  if (!response?.data?.sections) {
    return null;
  }

  return transformHomePageData(response.data.sections);
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

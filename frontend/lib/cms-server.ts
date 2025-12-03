import qs from "qs";

const BASE_URL = process.env.NEXT_API_URL;

const Query_HOME_PAGE = {
  populate: {
    sections: {
      on: {
        "layout.hero-section": {
          populate: "*",
        },
        "layout.about-section": {
          populate: {
            video_about: {
              populate: "*",
            },
            items: "*",
          },
        },
        "layout.portfolio-section": {
          populate: "*",
        },
        "layout.why-choose-me-section": {
          populate: "*",
        },
        "layout.images-section": {
          populate: "*",
        },
        "layout.faq-section": {
          populate: "*",
        },
      },
    },
  },
};

export async function getHomePage() {
  const query = qs.stringify(Query_HOME_PAGE);
  const response = await getCMSData(`/api/home-page?${query}`);
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

export const QUERY_HOME_PAGE = {
  populate: {
    sections: {
      on: {
        "layout.hero-section": {
          populate: {
            portada: {
              fields: ["url", "alternativeText"],
            },
            social: "*",
          },
        },
        "layout.about-section": {
          populate: {
            items: "*",
            video_about: {
              populate: {
                poster: { fields: ["url", "alternativeText"] },
                video: { fields: ["url"] }
              }
            }
          },
        },
        "layout.portfolio-section": {
          populate: "*",
        },
        "layout.why-choose-me-section": {
          populate: "*",
        },
        "layout.images-section": {
          populate: {
            images: {
              populate: "*",
            },
          },
        },
        "layout.faq-section": {
          populate: "*",
        },
      },
    },
  },
};
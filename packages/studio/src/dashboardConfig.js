let sites = [];

if (
  process.env.SANITY_STUDIO_BUILD_HOOK_ID_STUDIO &&
  process.env.SANITY_STUDIO_NAME_STUDIO &&
  process.env.SANITY_STUDIO_API_ID_STUDIO
) {
  sites.push({
    buildHookId: process.env.SANITY_STUDIO_BUILD_HOOK_ID_STUDIO,
    title: "CMS",
    name: process.env.SANITY_STUDIO_NAME_STUDIO,
    apiId: process.env.SANITY_STUDIO_API_ID_STUDIO,
  });
}

if (
  process.env.SANITY_STUDIO_BUILD_HOOK_ID_WEB &&
  process.env.SANITY_STUDIO_NAME_WEB &&
  process.env.SANITY_STUDIO_API_ID_WEB
) {
  sites.push({
    buildHookId: process.env.SANITY_STUDIO_BUILD_HOOK_ID_WEB,
    title: "Website",
    name: process.env.SANITY_STUDIO_NAME_WEB,
    apiId: process.env.SANITY_STUDIO_API_ID_WEB,
  });
}

export default {
  widgets: [
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites,
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/ngnijland/nieknijland.nl",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://www.nieknijland.nl/",
            category: "apps",
          },
        ],
      },
    },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

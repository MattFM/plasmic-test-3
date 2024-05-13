/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "spQANNG1kSM9iCXNiGRPE7",
        token: "PCSmwbAvdm7M1McMpU0UjLeRhV53MriuiEZOySWDUJNjmiACXILxGj12KxFwwBMM6hla66lfPA8jBszXZk8A",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}

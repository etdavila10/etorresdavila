module.exports = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://etdavila10.github.io/`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-json",
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Jost\:400,700',
          'Pacifico'
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Eduardo Torres Davila`,
        short_name: `Eduardo`,
        start_url: `/`,
        icon: `src/images/android-chrome-192x192.png`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `publications`,
        path: `${__dirname}/data/publications/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/data/projects/`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -75
      }
    }
  ]
};
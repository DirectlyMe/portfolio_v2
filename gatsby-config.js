const projectTypes = Object.freeze({
  web: "website",
  app: "mobileApp",
});


module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    projectData: {
      projects: [
        {
          name: "Olyve Art",
          type: projectTypes.web,
          features: [
            "eCommerce art gallery",
            "Completely fleshed out mobile and desktop user experience",
            "Integrated with stripe for online payments",
            "Email order confirmation",
            "Clean, minimalist style"
          ],
          screenShots: [
            "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/olyve_art/desktop_home.png",
            "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/olyve_art/mobile_home.png",
            "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/olyve_art/Screen+Shot+2019-01-13+at+6.43.27+PM.png",
            "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/olyve_art/Screen+Shot+2019-01-13+at+6.46.16+PM.png"
          ],
          technologies: [
            {
              name: "React",
              color: "7EB14F"
            },
            {
              name: "TypeScript",
              color: "B8BBFF"
            },
            {
              name: "Express",
              color: "FF9F37"
            },
          ],
          github: "https://www.github.com/DirectlyMe/ArtSite",
        },
        {
          name: "Olyve Art Inventory",
          type: projectTypes.web,
          features: [
            "Add and remove products from your site",
            "Keep track of your site's transactions",
            "Control your business by toggle between production mode and test mode",
          ],
          screenShots: [
            
          ]
        },
        {
          name: "Spots",
          type: projectTypes.app,
          features: [
            "Keep track of you favorite locations",
            "Share locations with friends",
            "Build a community"
          ],
          screenShots: [
            "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/spots/Screenshot_20190113-164627.png",
            "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/spots/Screenshot_20190113-165521.png",
            "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/spots/Screenshot_20190113-170240.png",
            "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/spots/Screenshot_20190113-170736.png"
          ],
          technologies: [
            {
              name: "Java",
              color: "7EB14F"
            },
            {
              name: "Android",
              color: "4CBDF4"
            },
            {
              name: "Firebase",
              color: "FF9F37"
            }
          ],
          github: "https://www.github.com/DirectlyMe/Spots",
        },
        {
          name: "Crypto Watch",
          type: projectTypes.app,
          features: [
            "Use machine learning to predict crypto prices",
            "Set price alerts on currencies",
            "Purchase crypto currencies directly from the app",
            "Authenticate with google for extra security"
          ],
          screenShots: [
            "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/crypto_watch/Simulator+Screen+Shot+-+iPhone+XR+-+2018-11-15+at+15.39.08.png",
            "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/crypto_watch/Simulator+Screen+Shot+-+iPhone+XR+-+2018-11-15+at+15.32.59.png",
            "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/crypto_watch/Simulator+Screen+Shot+-+iPhone+XR+-+2018-11-15+at+15.33.16.png",
            "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/crypto_watch/Simulator+Screen+Shot+-+iPhone+XR+-+2018-11-15+at+15.43.36.png"
          ],
          technologies: [
            {
              name: "Swift",
              color: "7EB14F"
            },
            {
              name: "IOS",
              color: "4CBDF4"
            },
            {
              name: "Node",
              color: "FF9F37"
            },
            {
              name: "Express",
              color: "B8BBFF"
            }
          ],
          github: "https://www.github.com/DirectlyMe/crypto_watch_ios",
        }
      ]
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /images/
          }
      }
  }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

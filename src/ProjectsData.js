export const projectTypes = Object.freeze({
  web: "website",
  app: "mobileApp"
});

const cryptoWatchImages = [
  "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/crypto_watch/Simulator+Screen+Shot+-+iPhone+XR+-+2018-11-15+at+15.39.08.png",
  "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/crypto_watch/Simulator+Screen+Shot+-+iPhone+XR+-+2018-11-15+at+15.32.59.png",
  "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/crypto_watch/Simulator+Screen+Shot+-+iPhone+XR+-+2018-11-15+at+15.33.16.png",
  "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/crypto_watch/Simulator+Screen+Shot+-+iPhone+XR+-+2018-11-15+at+15.43.36.png"
];

const olyveArtImages = [
  "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/olyve_art/desktop_home.png",
  "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/olyve_art/mobile_home.png",
  "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/olyve_art/Screen+Shot+2019-01-13+at+6.43.27+PM.png",
  "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/olyve_art/Screen+Shot+2019-01-13+at+6.46.16+PM.png"
];

const spotsImages = [
  "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/spots/Screenshot_20190113-164627.png",
  "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/spots/Screenshot_20190113-165521.png",
  "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/spots/Screenshot_20190113-170240.png",
  "https://s3-us-west-2.amazonaws.com/jackhansen-portfolio.com/Images/spots/Screenshot_20190113-170736.png"
];

export const projects = [
  {
    name: "Olyve Art",
    type: projectTypes.web,
    features: [
      "Ecommerce oriented site",
      "Completely fleshed out mobile and desktop user experience",
      "Integrated with stripe for online payments",
      "Clean, minimalist style"
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
    screenShots: olyveArtImages
  },
  {
    name: "Spots",
    type: projectTypes.app,
    features: [
      "Keep track of you favorite locations",
      "Share locations with friends",
      "Build a community"
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
    screenShots: spotsImages
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
    screenShots: cryptoWatchImages
  }
];

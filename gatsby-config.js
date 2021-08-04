require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: 'Your Story',
		titleTemplate: '%s · Your Story',
		description: 'Your Story: Take control of your story and guide it!',
		url: 'https://your-story-sv.web.app/', // No trailing slash allowed!
		image: '/images/static/your_story_logo_1.png', // Path to your image you placed in the 'static' folder,
		twitterUsername: '@salvillalon45'
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `your-story`,
				short_name: `your-story`,
				start_url: `/`,
				background_color: `#141720`,
				theme_color: `#141720`,
				display: `minimal-ui`,
				icon: `src/images/static/your_story_logo_1.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: 'gatsby-plugin-firebase',
			options: {
				credentials: {
					apiKey: process.env.apiKey,
					authDomain: process.env.authDomain,
					databaseURL: process.env.databaseURL,
					projectId: process.env.projectId,
					storageBucket: process.env.storingBucket,
					messagingSenderId: process.env.messagingSenderId,
					appId: process.env.appId,
					measurementId: process.env.measurementId
				}
			}
		},
		`gatsby-plugin-gatsby-cloud`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};

module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`
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
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: 'gatsby-plugin-firebase',
			options: {
				credentials: {
					apiKey: 'AIzaSyC_rdwT0ERogDr-WcG4sVyQC9sVQBIycoQ',
					authDomain: 'theodinproject-finalproject.firebaseapp.com',
					databaseURL:
						'https://theodinproject-finalproject-default-rtdb.firebaseio.com',
					projectId: 'theodinproject-finalproject',
					storageBucket: 'theodinproject-finalproject.appspot.com',
					messagingSenderId: '231363532637',
					appId: '1:231363532637:web:5d0e2afd24c9e2a2433ab4',
					measurementId: 'G-MKR51TYM43'
				}
			}
		},
		// {
		// 	resolve: `gatsby-plugin-create-client-paths`,
		// 	options: { prefixes: [`/dashboard/*`] }
		// },
		`gatsby-plugin-gatsby-cloud`
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};

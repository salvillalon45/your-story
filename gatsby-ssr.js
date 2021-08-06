/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

// Firebase
import 'firebase/database';

const _ = require('lodash');

// cleanup html before render
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
	const headComponents = getHeadComponents();
	replaceHeadComponents(omitDeep(headComponents, ['data-react-helmet']));
};

/**
 * remove properties from collection deep
 * @param collection
 * @param excludeKeys
 * @returns {any}
 */
const omitDeep = (collection, excludeKeys) =>
	_.cloneDeepWith(collection, value => {
		if (value && typeof value === 'object') {
			for (const key of excludeKeys) {
				try {
					delete value[key];
				} catch (_) {
					// console.log("ignore", _);
				}
			}
		}
	});

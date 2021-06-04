/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Firebase
import 'firebase/database';

// To use useContext API
import * as React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';

// highlight-start
export const wrapRootElement = ({ element }) => (
	<ThemeProvider>{element}</ThemeProvider>
);
// highlight-end

// -----------------------------------------------
//
// EditPageContent -> EditYear.js
// Desc: Sub component to display years
//
// -----------------------------------------------

// -----------------------------------------------
// Imports

// React
import * as React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';

// Styling
import { YearContainer, YearTitle } from '../EditPageContentStyledComponents';
// -----------------------------------------------

function EditYear(props) {
	const { year } = props;

	return (
		<Grid item xs>
			<YearContainer>
				<YearTitle>In the year {year}...</YearTitle>
			</YearContainer>
		</Grid>
	);
}

export default EditYear;

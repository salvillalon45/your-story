// -----------------------------------------------
//
// util -> mainUtil.js
// Desc: Functions to help organize code
//
// -----------------------------------------------

function orderYears(reflections) {
	// Help from https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
	const sortedReflections = Object.entries(reflections).sort((a, b) => {
		return a[1].year < b[1].year ? 1 : -1;
	});
	const sortedReflectionsMap = new Map();
	sortedReflections.map(reflectionArray => {
		const events = reflectionArray[1].events;
		const year = reflectionArray[1].year;
		const reflectionId = reflectionArray[0];
		sortedReflectionsMap.set(reflectionId, { events, year });
	});

	return sortedReflectionsMap;
}

function pp(statement) {
	const spacing = '10px';
	const styles = `padding: ${spacing}; background-color: white; color: red; font-style: italic; border: 1px solid black; font-size: 2em;`;
	console.log(`%c${statement}`, styles);
}

export { orderYears, pp };

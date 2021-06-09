// -----------------------------------------------
//
// util -> mainUtil.js
// Desc: Functions to help organize code
//
// -----------------------------------------------

function orderYears(reflections) {
	// Help from https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
	reflections = Object.entries(reflections)[1];
	return reflections.sort((a, b) => (a.year > b.year ? 1 : -1));
}

function pp(statement) {
	const spacing = '10px';
	const styles = `padding: ${spacing}; background-color: white; color: red; font-style: italic; border: 1px solid black; font-size: 2em;`;
	console.log(`%c${statement}`, styles);
}

export { orderYears, pp };

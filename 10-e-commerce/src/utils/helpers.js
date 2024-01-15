export const formatPrice = (price) => {
	return +(price / 100).toFixed(2);
};

export const getUniqueValues = (array, string) => {
	return ['all', ...new Set(array.map((product) => product[string]))];
};

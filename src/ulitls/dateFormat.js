export const dateServerToLocalFormat = (date) => {
	const dateFormat = new Date(date);

	return dateFormat.toLocaleString('ru', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
};

export const dateToServerFormat = (date) => {
	const [currentDate] = date.toLocaleString('ru').split(', ');
	return currentDate.split('.').reverse().join('-');
};

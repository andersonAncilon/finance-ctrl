export default (store) => {
	store.on('@init', () => ({ control: [] }));

	store.on('control/add', ({ control }, entry) => {
		return { control: control.concat([entry]) };
	});
};

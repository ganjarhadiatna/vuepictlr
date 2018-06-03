export default {
	hobiById: state => (id) => {
		return state.hobi.find((obj) => {
			return obj.id === id
		})
	}
}
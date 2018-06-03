<template>
	<div>
		<img :src="'http://localhost/paper/public/story/covers/' + placeImage" alt="design">
	</div>
</template>
<script type="text/javascript">
export default {
	data () {
		return {
			urlImageDesign: 'http://localhost/api-pictlr/public/design/'+this.$route.params.iddesign+'/image',
			placeImage: '',
			errors: ''
		}
	},
	created: function () {
		axios.get(this.urlImageDesign)
		.then(response => {
			//json parser
			this.placeImage = response.data
		})
		.catch(e => {
			this.errors.message
		})
	}
}
</script>
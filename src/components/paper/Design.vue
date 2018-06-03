<template>
	<div class="col-content">
		<frame-design :url="urlDesign"></frame-design>
	</div>
</template>
<script type="text/javascript">
	import Design from '@/components/main/Design.vue'
	export default {
		data () {
			return {
				urlDesign: this.baseUrl + '/paper/' + this.$route.params.idpapers + '/designs' + '?api_token=' + this.$session.get('jwt') + '&',
			}
		},
		components: {
			'frame-design': Design
		}
	}
</script>
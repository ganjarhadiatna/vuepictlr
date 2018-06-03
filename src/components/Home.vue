<template>
	<div>
		<div class="col-content">
			<frame-design :url="urlDesign"></frame-design>
		</div>
	</div>
</template>
<script type="text/javascript">
import Design from '@/components/main/Design'
export default {
	data () {
		return {
			urlDesign: this.baseUrl + '/timelines/' + this.$session.get('jwt') + '?api_token=' + this.$session.get('jwt') + '&',
			designs: [],
			errors: []
		}
	},
	components: {
		'frame-design': Design
	},
	beforeCreate: function () {
		if (!this.$session.exists()) {
			this.$router.push('/welcome')
		}
	}
}
</script>
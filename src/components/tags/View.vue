<template>
	<div class="col-content padding-top-20px">
		<div class="col-800px padding-20px">
			<h1 class="ctn-main-font ctn-big ctn-sek-color">
				{{ this.$route.params.ctr }}
			</h1>
		</div>
		<div>
			<frame-design :url="urlDesign"></frame-design>
		</div>
	</div>
</template>
<script type="text/javascript">
import Design from '@/components/main/Design'
export default {
	data () {
		return {
			urlDesign: this.baseUrl + '/tag/design/' + this.$route.params.ctr  + '?api_token=' + this.$session.get('jwt') + '&',
			designs: []
		}
	},
	components: {
		'frame-design': Design
	}
}
</script>
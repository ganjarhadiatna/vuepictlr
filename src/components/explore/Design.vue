<template>
	<div class="col-content">
		<frame-design :url="urlDesign"></frame-design>
	</div>
</template>
<script type="text/javascript">
	import jQuery from 'jquery'
	import Design from '@/components/main/Design'
	export default {
		data () {
			return {
				urlDesign: this.baseUrl + '/explore/' + this.$route.params.ctr  + '?api_token=' + this.$session.get('jwt') + '&',
				designs: []
			}
		},
		components: {
			'frame-design': Design
		},
		created: function () {
			jQuery('#explore-nav ul li').each(function(index, el) {
				jQuery(this).removeClass('active')
			})
			jQuery('#explore-nav ul #'+this.$route.params.ctr).addClass('active')
		}
	}
</script>

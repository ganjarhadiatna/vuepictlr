<template>
	<div>
		<div class="col-full">
			<div class="navigator nav-3x width-400px nav-theme-3 padding-20px" id="nav">
				<ul>
					<router-link :to="{path : '/'+$route.params.username+'/papers'}">
					    <li class="" id="paper">
					    	<div class="icn">Papers</div>
					    </li>
					</router-link>
					<router-link :to="{path : '/'+$route.params.username+'/designs'}">
					    <li class="active" id="design">
					    	<div class="icn">Designs</div>
					    </li>
					</router-link>
					<router-link :to="{path : '/'+$route.params.username+'/saved'}">
					    <li class="" id="saved">
					    	<div class="icn">Saved</div>
					    </li>
					</router-link>
				</ul>
			</div>
		</div>
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
			urlDesign: this.baseUrl + '/user/' + this.$route.params.username + '/designs' + '?api_token=' + this.$session.get('jwt') + '&',
			designs: []
		}
	},
	components: {
		'frame-design': Design
	}
}
</script>
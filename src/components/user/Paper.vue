<template>
	<div class="col-content">
		<div>
			<div class="navigator nav-3x width-400px nav-theme-3 padding-20px" id="nav">
				<ul>
					<router-link :to="{path : '/'+$route.params.username+'/papers'}">
					    <li class="active" id="paper">
					    	<div class="icn">Papers</div>
					    </li>
					</router-link>
					<router-link :to="{path : '/'+$route.params.username+'/designs'}">
					    <li class="" id="design">
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
		<div class="padding-15px">
			<frame-paper :url="urlPaper"></frame-paper>
		</div>
	</div>
</template>
<script type="text/javascript">
import jQuery from 'jquery'
import Paper from '@/components/main/Paper'

export default {
	data () {
		return {
			urlPaper: this.baseUrl + '/user/' + this.$route.params.username + '/papers',
			navDesign: '',
			navPaper: 'active'
		}
	},
	components: {
		'frame-paper': Paper
	}
}
</script>
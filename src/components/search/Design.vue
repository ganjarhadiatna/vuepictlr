<template>
	<div class="col-content">
		<div class="padding-20px">
			<div class="navigator nav-3x width-600px nav-theme-1" id="nav">
				<ul>
					<router-link :to="{path: '/search/'+$route.params.ctr+'/designs'}">
						<li class="active" id="pict">
							<div class="icn">Designs</div>
						</li>
					</router-link>
					<router-link :to="{path: '/search/'+$route.params.ctr+'/papers'}">
						<li class="" id="wall">
							<div class="icn">Papers</div>
						</li>
					</router-link>
					<router-link :to="{path: '/search/'+$route.params.ctr+'/users'}">
						<li class="" id="user">
							<div class="icn">Users</div>
						</li>
					</router-link>
				</ul>
			</div>
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
			urlDesign: this.baseUrl + '/search/design/' + this.$route.params.ctr  + '?api_token=' + this.$session.get('jwt') + '&',
		}
	},
	components: {
		'frame-design': Design
	}
}
</script>
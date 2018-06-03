<template>
	<div class="col-content">
		<div class="padding-20px">
			<div class="navigator nav-3x width-600px nav-theme-1" id="nav">
				<ul>
					<router-link :to="{path: '/search/'+$route.params.ctr+'/designs'}">
						<li class="" id="pict">
							<div class="icn">Designs</div>
						</li>
					</router-link>
					<router-link :to="{path: '/search/'+$route.params.ctr+'/papers'}">
						<li class="active" id="wall">
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
		<div class="padding-15px">
			<frame-paper :url="urlPaper"></frame-paper>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Paper from '@/components/main/Paper'
	export default {
		data () {
			return {
				urlPaper: this.baseUrl + '/search/paper/' + this.$route.params.ctr,
			}
		},
		components: {
			'frame-paper': Paper
		}
	}
</script>
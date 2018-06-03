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
						<li class="" id="wall">
							<div class="icn">Papers</div>
						</li>
					</router-link>
					<router-link :to="{path: '/search/'+$route.params.ctr+'/users'}">
						<li class="active" id="user">
							<div class="icn">Users</div>
						</li>
					</router-link>
				</ul>
			</div>
		</div>
		<div>
			<frame-user :url="urlUser"></frame-user>
		</div>
	</div>
</template>
<script type="text/javascript">
	import User from '@/components/main/User'
	export default {
		data () {
			return {
				urlUser: this.baseUrl + '/search/user/' + this.$route.params.ctr,
			}
		},
		components: {
			'frame-user': User
		}
	}
</script>
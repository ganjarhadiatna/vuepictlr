<template>
	<span v-if="this.$session.exists()">
		<span v-for="dt, i in user">
			<button class="btn btn-circle btn-primary-color btn-focus" @click="opNotif" id="menu-notif">
				<span class="mn-icn far fa-lg fa-bell"></span>
			</button>
			<router-link :to="{'path': '/'+dt[i].username}">
				<button class="btn btn-image btn-primary-color btn-focus btn-radius">
					<div 
						class="ppt image image-35px image-circle"
						:style="{'background-image': 'url(http://localhost/paper/public/profile/thumbnails/'+dt[i].foto+')'}" :alt="dt[i].username">
					</div>
					<div class="usr mn-ttl">{{dt[i].username}}</div>
				</button>
			</router-link>
			<button class="btn btn-circle btn-main-color" @click="opCreatePopup">
				<span class="fa fa-lg fa-plus"></span>
			</button>
		</span>
	</span>
	<span v-else>
		<router-link to="/login">
			<button class="btn btn-primary-color btn-focus btn-radius">
				<span>Login</span>
			</button>
		</router-link>
		<router-link to="/register">
			<button class="btn btn-main-color btn-focus">
				<span class="fa fa-lg fa-plus"></span>
				<span>Register</span>
			</button>
		</router-link>
	</span>
</template>
<script type="text/javascript">
	import jQuery from 'jquery'
	export default {
		data () {
			return {
				urlDetail: this.baseUrl + '/my/data/'+this.$session.get('jwt')+'?api_token=' + this.$session.get('jwt'),
				user: []
			}
		},
		methods: {
			opNotif: function (event) {
				event.stopPropagation()
				jQuery('#notif').show()
				jQuery('#ctr').hide()
				jQuery('#createPopup').hide()
			},
			opCreatePopup: function (event) {
				event.stopPropagation()
				jQuery('#createPopup').show()
				jQuery('#notif').hide()
				jQuery('#ctr').hide()
			},
		},
		created: function () {
			if (this.$session.exists()) {
				var vm = this
				axios.get(this.urlDetail)
				.then(function (response) {
					vm.user.push(response.data)
				})
				.catch(e => {
					console.log(e.message)
				})
			}
		}
	}
</script>
<template>
<div>
	<div v-if="loading">
		<div class="frame-load-circle">
			<div class="btn btn-sekunder-color btn-circle">
				<div class="icn fas fa-lg fa-spin fa-circle-notch"></div>
			</div>
		</div>
	</div>

	<div v-if="empty">
		<div class="frame-empty">
			<div class="icn fa fa-lg fa-thermometer-empty btn-main-color"></div>
			<div class="ttl padding-15px">Users Empty</div>
		</div>
	</div>

	<div v-if="placeUser && placeUser.length">
		<div class="frame-home-3x">
			<div v-for="pp in placeUser">
				<div class="frame-user">
					<div class="top">
						<router-link :to="{path : '/'+pp.username}">
							<div class="image image-100px image-circle" 
								:style="{'background-image': 'url(http://localhost/paper/public/profile/thumbnails/'+pp.foto+')'}" :alt="pp.username"></div>
						</router-link>
					</div>
					<div class="mid">
						<div class="ctn-main-font ctn-mikro ctn-bold ctn-sek-color">
							<router-link :to="{path : '/'+pp.username}">
								{{ pp.name }}
							</router-link>
						</div>
						<div class="ctn-main-font ctn-mikro ctn-14px ctn-sek-color">
							<router-link :to="{path : '/'+pp.username}">
								{{ pp.username }}
							</router-link>
						</div>
						<div class="menu-list padding-5px">
							<ul>
								<router-link :to="{path : '/'+pp.username+'/papers'}">
									<li>
										<div class="val">{{ pp.ttl_papers }}</div>
										<div class="ttl">Papers</div>
									</li>
								</router-link>
								<router-link :to="{path : '/'+pp.username+'/designs'}">
									<li>
										<div class="val">{{ pp.ttl_designs }}</div>
										<div class="ttl">Designs</div>
									</li>
								</router-link>
								<router-link :to="{path : '/'+pp.username+'/saved'}">
									<li>
										<div class="val">{{ pp.ttl_saved }}</div>
										<div class="ttl">Saved</div>
									</li>
								</router-link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div v-if="errors && errors.length">
		<div v-for="er in errors">
			<div class="frame-empty">
				<div class="icn fa fa-lg fa-cogs btn-main-color"></div>
				<div class="ttl padding-15px">{{ er.message }}</div>
			</div>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
	export default {
		props: ['msg', 'url'],
		data () {
			return {
				placeUser: [],
				errors: [],
				loading: false,
				empty: false
			}
		},
		created: function () {
			this.fetchData()	
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData () {
				this.loading = true
				this.empty = false
				axios.get(this.url)
				.then(response => {
					this.loading = false
					if (response.data.length > 0) {
						this.placeUser = response.data
					} else {
						this.empty = true
					}
				})
				.catch(e => {
					this.errors.push(e)
				})
			}
		}
	}
</script>
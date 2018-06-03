<template>
	<div class="col-full">

		<div v-if="placeProfile && placeProfile.length">
			<div v-for="pp in placeProfile">
				<div class="col-700px">
					<div v-if="$session.exists()">
						<div class="panel panel-mobile none">
							<div class="panel-content none">
								<div class="page-panel col-700px">
									<div class="grid-1 left-button">
										<router-link :to="{path : '/'+pp.username+'/setting'}">
											<button class="btn btn-circle btn-primary-color btn-focus">
												<span class="fas fa-lg fa-cog"></span>
											</button>
										</router-link>
										<router-link :to="{path : '/'+pp.username+'/setting/profile'}">
											<button class="btn btn-circle btn-primary-color btn-focus">
												<span class="fas fa-lg fa-pencil-alt"></span>
											</button>
										</router-link>
									</div>
									<div class="grid-2 panel-title mobile"></div>
									<div class="grid-3 right-button">
										<button class="btn btn-primary-color btn-focus btn-radius" @click="$logout()">
											<span class="fa fa-lg fa-power-off"></span>
											<span class="ttl">Logout</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div class="padding-10px"></div>
						<div class="frame-profile padding-20px">
							<div class="grid-1 left">
								<div class="image image-150px image-circle" :style="{'background-image': 'url(http://localhost/paper/public/profile/thumbnails/'+pp.foto+')'}" :alt="pp.username">
								</div>
							</div>
							<div class="grid-2 main">
								<h1 class="name ctn-main-font ctn-bold ctn-standar ctn-sek-color">
									<router-link :to="{path : '/'+pp.username}">{{ pp.name }}</router-link>
								</h1>
								<div class="name ctn-main-font ctn-bold ctn-16px ctn-sek-color">
									<router-link :to="{path : '/'+pp.username}">{{ pp.username }}</router-link>
								</div>
								<div class="menu-list padding-15px">
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
									    <li>
									    	<div class="web ctn-main-font ctn-bold ctn-16px ctn-sek-color">
									    		<a :href="pp.website" target="_blank">{{ pp.website }}</a>
									    	</div>
									    	<div class="about">{{ pp.about }}</div>
									    </li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="errors && errors.length">
			<div v-for="er in errors">
				{{er.message}}
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
		    return {
		    	urlProfile: this.baseUrl + '/user/' + this.$route.params.username,
		    	placeProfile: [],
				errors: []
		    }
		},
	    created: function () {
	    	axios.get(this.urlProfile)
			.then(response => {
				this.placeProfile = response.data
			})
			.catch(e => {
				this.errors.push(e)
			})
	    }
	}
</script>
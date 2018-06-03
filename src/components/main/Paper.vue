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
			<div class="ttl padding-15px">Papers Empty</div>
		</div>
	</div>

	<div v-if="placePaper && placePaper.length">
		<div class="frame-home-flex">
			<div v-for="pp in placePaper">
				<!--frame paper-->
				<div class="frame-paper">
				    <div class="top">
				        <router-link :to="{'path': '/'+pp.username+'/paper/'+pp.idpapers}">
				        	<div v-if="pp.ttl_image != 0">
				                <div class="pl-icn pl-image">
				                    <div class="bg-image image image-all" :style="{'background-image': 'url(http://localhost/paper/public/story/thumbnails/'+pp.cover1+')'}" alt="design">
				                    </div>
				                    <div class="bg-image image image-all" :style="{'background-image': 'url(http://localhost/paper/public/story/thumbnails/'+pp.cover2+')'}" alt="design">
				                    </div>
				                    <div class="bg-image image image-all" :style="{'background-image': 'url(http://localhost/paper/public/story/thumbnails/'+pp.cover3+')'}" alt="design">
				                    </div>
				                </div>
				            </div>
				            <div v-else>
				                <div class="pl-icn">
				                    <span class="mn-icn fas fa-lg fa-box-open"></span>
				                </div>
				            </div>
				        </router-link>
				    </div>
				    <div class="mid">
				        <div class="padding-10px">
				            <h3>
				            	<div class="ctn-main-font ctn-sek-color">
					            	<router-link :to="{'path': '/'+pp.username+'/paper/'+pp.idpapers}">
					            		{{ pp.title }}
					            	</router-link>
					            </div>
				            </h3>
				        </div>
				        <div class="menu-list no-hover">
							<ul>
								<li>
									<div class="val">{{ pp.views }}</div>
									<div class="ttl">Visited</div>
								</li>
								<li>
									<div class="val">{{ pp.ttl_design }}</div>
									<div class="ttl">Designs</div>
								</li>
				                <li>
									<div class="val">{{ pp.ttl_watch }}</div>
									<div class="ttl">Watchs</div>
								</li>
				                <li class="right">
									<router-link :to="{path: pp.username}">
										<div class="image image-40px image-circle" :style="{'background-image': 'url(http://localhost/paper/public/profile/thumbnails/'+pp.foto+')'}" :alt="pp.username">
										</div>
									</router-link>
								</li>
							</ul>
						</div>
				    </div>
				</div>
			</div>
		</div>

		<div class="frame-more padding-20px">
			<button class="trg btn btn-circle btn-sekunder-color btn-border btn-focus">
				<span class="fa fa-lg fa-plus"></span>
			</button>
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
			placePaper: [],
			errors: [],
			loading: false,
			empty: false
		}
	},
	created: function () {
		this.fetchData();
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
					this.placePaper = response.data
					//console.log(response.data);
				} else {
					this.empty = true
				}
			})
			.catch(e => {
				this.errors.push(e)
				//console.log(e);
			})
		}
	}
}
</script>
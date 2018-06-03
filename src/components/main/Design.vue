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
			<div class="ttl padding-15px">Designs Empty</div>
		</div>
	</div>

	<div v-if="placeDesigns && placeDesigns.length">
		<div class="frame-home">
			<div v-for="dg in placeDesigns">
				<div class="frame-post">
					<div class="top">
						<div class="mn tool-position-top must-hidden">
							<button class="tool btn btn-circle btn-color-main btn-focus" @click="$saveToWall('open')" title="Save this pict">
								<span class="fas fa-lg fa-bookmark"></span>
							</button>
						</div>
						<div class="bot tool-position-bottom must-hidden">
							<ul>
								<router-link :to="{path: '/'+dg.username}">
									<li class="lef" title="Edit Design">
										<div class="icn fas fa-lg fa-pencil-alt"></div>
									</li>
								</router-link>
								<router-link :to="{path: '/'+dg.username}">
									<li class="rig" title="View User">
										<div class="icn fa fa-lg fa-user"></div>
									</li>
								</router-link>
							</ul>
						</div>
						<router-link :to="{path: '/'+dg.username+'/paper/'+dg.idpapers+'/design/'+dg.idimage}" title="View this design">
							<div class="image-place" :style="{'padding-bottom': ((dg.height / dg.width) * 100)+'%'}">
								<div class="pict-cover"></div>
								<img class="image-src" :src="'http://localhost/paper/public/story/thumbnails/'+dg.cover"></img>
							</div>
						</router-link>
					</div>
					<div class="mid padding-post">
						<div class="desc ctn-main-font ctn-bold ctn-16px ctn-sek-color">
							{{ dg.description }}
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="frame-more padding-20px">
			<button class="trg btn btn-circle btn-sekunder-color btn-border btn-focus" @click="loadMore()">
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
			placeDesigns: [],
			errors: [],
			loading: false,
			empty: false,
			limit: 5
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
			axios.get(this.url+'limit='+(this.limit += 5))
			.then(response => {
				this.loading = false
				if (response.data.length > 0) {
					//json parser
					this.placeDesigns = response.data
					//console.log(response.data)
				} else {
					this.empty = true
				}
			})
			.catch(e => {
				this.loading = false
				this.errors.push(e)
			})
		},
		loadMore () {
			this.fetchData()
		},
		showUrl () {
			alert(this.url+'?limit=5')
		}
	}
}
</script>
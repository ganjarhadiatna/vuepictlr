<template>
	<div class="col-content padding-top-20px">
		<div class="col-900px padding-top-20px">
			<h1 class="ctn-main-font ctn-big ctn-sek-color">
				Explore Design's
			</h1>
			<div class="padding-20px">
				<div class="navigator nav-all nav-theme-4" id="explore-nav">
					<ul>
						<router-link to="/explore/fresh">
						    <li key="fresh" id="fresh">
						    	<div class="icn">Fresh</div>
						    </li>
						</router-link>
						<router-link to="/explore/popular">
						    <li key="popular" id="popular">
						    	<div class="icn">Populars</div>
						    </li>
						</router-link>
						<router-link to="/explore/trending">
						    <li key="trending" id="trending">
						    	<div class="icn">Trendings</div>
						    </li>
						</router-link>
						<span v-if="placeTag && placeTag.length">
							<span v-for="tag in placeTag">
								<router-link :to="{'path': '/explore/news/'+tag.idtags}">
								    <li key="trending" :id="'tag-'+tag.idtags">
								    	<div class="icn">{{ tag.tag }}</div>
								    </li>
								</router-link>
							</span>
						</span>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				urlTagPopular: this.baseUrl + '/tag/popular',
				placeTag: []
			}
		},
		created: function () {
			axios.get(this.urlTagPopular)
			.then(response => {
				this.placeTag = response.data
			})
		}
	}
</script>

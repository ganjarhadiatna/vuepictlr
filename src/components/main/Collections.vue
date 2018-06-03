<template>
	<div class="content-popup" id="ctr">
		<div class="panel-top">
			<div class="title">Collections</div>
		</div>
		<div class="content-place show">
			<div v-if="collectionsAll && collectionsAll.length">
				<div class="collection">
					<div class="menu-down">
						<ul>
							<router-link to="/home">
								<li>Home Feeds</li>
							</router-link>
							<router-link to="/explore/fresh">
								<li>Explore</li>
							</router-link>
							<div v-for="cl in collectionsAll">
								<router-link :to="{path: '/collect/'+cl.tag}">
									<li>{{cl.tag}}</li>
								</router-link>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				urlCollectionsAll: this.baseUrl + '/collections/all',
				collectionsAll: [],
				errors: [],
			}
		},
		created: function () {
			axios.get(this.urlCollectionsAll)
			.then(response => {
				//json parser
				this.collectionsAll = response.data
			})
			.catch(e => {
				this.errors.push(e)
			})
		}
	}
</script>
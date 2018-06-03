<template>
	<div class="col-full">
		<div v-if="placeTag && placeTag.length">
			<div class="panel panel-mobile padding-bottom-10px">
				<div class="panel-content padding-5px">
					<div class="width-all width-center">
						<div class="place-search-tag col-full">
							<div class="st-lef">
								<div class="btn btn-circle btn-sekunder-color btn-no-border" @click="toLeft">
									<span class="fa fa-lg fa-angle-left"></span>
								</div>
							</div>
							<div class="st-mid" id="ctnTag">
								<span v-for="tg in placeTag">
									<router-link :to="{path: '/collect/' + tg.tag}">
										<div class="frame-top-tag">
											{{ tg.tag }}
										</div>
									</router-link>
								</span>
							</div>
							<div class="st-rig">
								<div class="btn btn-circle btn-sekunder-color btn-no-border" @click="toRight">
									<span class="fa fa-lg fa-angle-right"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="padding-10px"></div>
	</div>
</template>
<script type="text/javascript">
import jQuery from 'jquery'

export default {
	data () {
		return {
			urlTag: this.baseUrl + '/search/tag/' + this.$route.params.ctr,
			placeTag: []
		}
	},
	created: function () {
		axios.get(this.urlTag)
		.then(response => {
			this.placeTag = response.data
		})
		.catch(e => {
			console.log(e)
		})
	},
	methods: {
		toLeft: function (event) {
			event.preventDefault()
			var wd = 500
			var sc = jQuery('#ctnTag').scrollLeft()
			if (sc >= 0) {
				jQuery('#ctnTag').animate({scrollLeft: (sc - wd)}, 500)
			}
		},
		toRight: function (event) {
			event.preventDefault()
			var wd = 500
			var sc = jQuery('#ctnTag').scrollLeft()
			if (true) {
				jQuery('#ctnTag').animate({scrollLeft: (sc + wd)}, 500)
			}
		}
	}
}
</script>
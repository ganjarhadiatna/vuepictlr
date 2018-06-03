<template>
	<div class="col-full">
		<div class="panel panel-mobile">
			<div class="panel-content padding-5px">
				<div class="width-all width-center">
					<div class="place-search-tag col-full">
						<div class="st-lef">
							<div class="btn btn-circle btn-sekunder-color btn-no-border" @click="toLeft">
								<span class="fa fa-lg fa-angle-left"></span>
							</div>
						</div>
						<div class="st-mid" id="ctnTag">
							<span v-for="item in 20">
								<router-link :to="{path: '/collect/' + item}">
									<div class="frame-top-tag">
										this is tags {{ item }}
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
		<div class="related-pict col-content">
			<div class="frame-home">
				<div v-for="item in 3">
					<div v-for="(pict, i) in picts">
						<div class="frame-post">
							<div class="top">
								<div class="mn tool-position-top must-hidden">
									<button class="tool btn btn-circle btn-color-main btn-focus" @click="$saveToWall('open')" title="Save this pict">
										<span class="fa fa-lg fa-bookmark"></span>
									</button>
								</div>
								<router-link :to="{path: '/pict/'+(i+1)}" title="View this pict">
									<div>
										<div class="pict-cover"></div>
										<img :src="pict.placeImage" alt=""></img>
									</div>
								</router-link>
								<div class="bot tool-position-bottom must-hidden">
									<ul>
										<div class="post-lf">
											<router-link to="/ganjar_hadiatna">
												<li class="sek" title="View User">
											    	<div class="icn fa fa-lg fa-user"></div>
											    </li>
											</router-link>
										</div>
										<div class="post-lf">
											<router-link to="/wall/12045">
												<li class="sek" title="View Wall">
											    	<div class="icn fa fa-lg fa-th-large"></div>
											    </li>
											</router-link>
										</div>
									</ul>
								</div>
							</div>
							<div class="mid padding-post">
								<div class="desc">
									This is place for a test.
								</div>
								<div class="desc notes">
									by ganjar18
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import jQuery from 'jquery'

export default {
	data () {
		return {
			picts: [
				{ placeImage: '/static/1.jpg' },
				{ placeImage: '/static/2.jpg' },
				{ placeImage: '/static/3.jpg' },
				{ placeImage: '/static/4.jpg' }
			]
		}
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
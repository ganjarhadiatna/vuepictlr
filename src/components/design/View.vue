<template>
	<div class="frame-pict">
		<div class="panel panel-mobile">
			<div class="panel-content">
				<div class="page-panel width-900px">
					<div class="left-button">
						<button class="btn btn-circle btn-primary-color btn-focus" @click="$goBack()">
							<span class="fa fa-lg fa-arrow-left"></span>
						</button>
						<button class="btn btn-circle btn-primary-color btn-focus" @click="$opMenuMessage('open','Still Builded!')">
							<span class="fa fa-lg fa-pencil-alt"></span>
						</button>
						<button class="btn btn-circle btn-primary-color btn-focus" @click="$opMenuPost('open')">
							<span class="fa fa-lg fa-ellipsis-h"></span>
						</button>
					</div>
					<div class="panel-title mobile"></div>
					<div class="right-button">
						<button class="btn btn-main-color btn-focus" @click="$saveToWall('open')" title="Save this pict">
							<span class="fa fa-lg fa-bookmark"></span>
							<span class="ttl">Save</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		
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

		<div>
			<div class="place-pict width-900px width-center padding-10px">
				<div v-if="detailDesign && detailDesign.length">
					<div v-for="dg in detailDesign">

						<div class="main-pict">
							<div class="content-pict grid-2x">
								<div class="main">
									<div class="image-place" :style="{'padding-bottom': ((dg.height / dg.width) * 100)+'%'}">
										<img class="image-src" :src="'http://localhost/paper/public/story/covers/' + dg.image">
									</div>
								</div>
								<div class="side">
									<div>
										<div v-if="dg.description">
											<div class="pc-desc ctn-main-font ctn-16px ctn-bold ctn-sek-color padding-bottom-15px">
												{{dg.description}}
											</div>
										</div>
										<div v-if="tagDesign && tagDesign.length">
											<div class="padding-bottom-15px">
												<span v-for="tag in tagDesign">
													<router-link :to="{'path': '/tags/'+tag.tag}" class="frame-top-tag no-margin">
														{{tag.tag}}
													</router-link>
												</span>
											</div>
										</div>
									</div>
									<div class="top padding-bottom-15px">
										<router-link :to="{'path': '/'+dg.username}">
											<div class="image image-45px image-circle" :style="{'background-image': 'url(http://localhost/paper/public/profile/thumbnails/'+dg.foto+')'}" :alt="dg.username">
											</div>
										</router-link>

										<div class="info">
											<div class="ctn-main-font ctn-bold ctn-14px ctn-sek-color">
												Design on <router-link :to="{'path': '/'+dg.username+'/paper/'+dg.idpapers}">{{dg.title}}</router-link>
											</div>
											<div class="ctn-main-font ctn-bold ctn-14px ctn-sek-color">
												By <router-link :to="{'path': '/'+dg.username}">{{dg.username}}</router-link>
											</div>
										</div>
										<div class="follow">
											<router-link :to="{'path': '/'+dg.username+'/paper/'+dg.idpapers}">
												<input type="button" class="btn btn-sekunder-color width-all btn-focus" value="Visit">
											</router-link>
										</div>
									</div>
									<div v-if="otherDesign && otherDesign.length">
										<div class="padding-bottom-5px">
											<div class="ctn-main-font ctn-bold ctn-14px ctn-sek-color padding-bottom-15px">Other Designs</div>
											<div class="ctn-wall">
												<div class="pos ctn-wall-lef">
													<div class="btn btn-circle btn-sekunder-color btn-no-border" @click="toLeft">
														<span class="fa fa-lg fa-angle-left"></span>
													</div>
												</div>
												<div class="ctn-wall-mid" id="ctn-wall">
													<!---->
													<span v-for="other in otherDesign">
														<router-link :to="{'path': '/'+dg.username+'/paper/'+dg.idpapers+'/design/'+other.idimage}" class="ctn-link inline-block">
															<div 
																class="image image-100px image-radius image-inline-block" 
																:style="{'background-image': 'url(http://localhost/paper/public/story/thumbnails/'+other.image+')'}">
															</div>
														</router-link>
													</span>
													<span v-if="otherDesign.length >= 8">
														<router-link :to="{'path': '/'+dg.username+'/paper/'+dg.idpapers}" class="ctn-link inline-block">
															<div class="image image-100px image-radius image-inline-block">
																<span class="ttl ctn-main-font ctn-sek-color ctn-desc">Others</span>
															</div>
														</router-link>
													</span>
												</div>
												<div class="pos ctn-wall-rig">
													<div class="btn btn-circle btn-sekunder-color btn-no-border" @click="toRight">
														<span class="fa fa-lg fa-angle-right"></span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="bot padding-10px">
										<div class="ctn-main-font ctn-bold ctn-14px ctn-sek-color">Comments</div>
										<div v-if="$session.exists()">
											<div class="padding-top-15px">
												<input type="text" name="comment" class="txt txt-primary-color z" placeholder="Comment">
											</div>
										</div>
									</div>
									<div v-if="commentDesign && commentDesign.length">
										<div class="comment-content" id="place-comment">
											<div v-for="cm in commentDesign">
												<div class="frame-comment">
													<div class="dt-1">
														<router-link to="/ganjar18">
															<div class="image image-45px image-circle">
																<img :src="'http://localhost/paper/public/profile/thumbnails/'+cm.foto">
															</div>
														</router-link>
													</div>
													<div class="dt-2">
														<div class="ctn-main-font ctn-thin ctn-16px ctn-sek-color">
															<div class="comment-main">
																<router-link :to="{'path': '/'+cm.username}" class="ctn-main-font ctn-bold ctn-16px ctn-sek-color">
																	{{cm.username}}
																</router-link>
																{{cm.description}}
															</div>
														</div>
														<div class="tgl">
															<span>{{cm.created}}</span>
														</div>
													</div>
												</div>
											</div>
											<div v-if="commentDesign.length > 10">
												<div class="frame-more padding-20px">
													<button class="trg btn btn-circle btn-sekunder-color btn-border btn-focus">
														<span class="fa fa-lg fa-plus"></span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div v-if="errors && errors.length">
					<div v-for="er in errors">
						{{$opBottomMessage('open', er.message)}}
					</div>
				</div>
			</div>
		</div>
		<div class="col-content" v-if="post">
			<div class="padding-20px">
				<div class="main-title ctn-main-font ctn-bold ctn-small ctn-sek-color ctn-center">
					Related Designs
				</div>
			</div>
			<div>
				<frame-design :url="urlRelatedDesign"></frame-design>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import Design from '@/components/main/Design.vue'
import jQuery from 'jquery'
export default {
	data () {
		return {
			urlDetailDesign: this.baseUrl + '/design/' + this.$route.params.iddesign,
			urlTagDesign: this.baseUrl + '/design/' + this.$route.params.iddesign + '/tags',
			urlCommentDesign: this.baseUrl + '/design/' + this.$route.params.iddesign + '/comments',
			urlOtherDesign: this.baseUrl + '/design/' + this.$route.params.idpapers + '/others',
			urlRelatedDesign: this.baseUrl + '/explore/fresh'  + '?api_token=' + this.$session.get('jwt') + '&',
			detailDesign: [],
			tagDesign: [],
			commentDesign: [],
			otherDesign: [],
			errors: [],
			loading: false,
			empty: false,
			post: true,
			postError: null,
		}
	},
	beforeRouteEnter (to, from, next) {
		var url = [
			axios.get('http://localhost:8000/api/design/'+to.params.iddesign),
			axios.get('http://localhost:8000/api/design/'+to.params.iddesign+'/tags'),
			axios.get('http://localhost:8000/api/design/'+to.params.iddesign+'/comments'),
			axios.get('http://localhost:8000/api/design/'+to.params.idpapers+'/others')

		]
		axios.all(url)
		.then(axios.spread(function (resDetail, resTags, resComments, resOthers) {
			next(vm => [
				vm.setDetail(resDetail),
				vm.setTags(resTags),
				vm.setComments(resComments),
				vm.setOther(resOthers)
			])
		}))
		.catch(e => {
			next(vm.setErrors(e))
		})
	},
	beforeRouteUpdate (to, from, next) {
		this.$setTop()
		var vm = this
		var url = [
			axios.get('http://localhost:8000/api/design/'+to.params.iddesign),
			axios.get('http://localhost:8000/api/design/'+to.params.iddesign+'/tags'),
			axios.get('http://localhost:8000/api/design/'+to.params.iddesign+'/comments'),
			axios.get('http://localhost:8000/api/design/'+to.params.idpapers+'/others')

		]
		axios.all(url)
		.then(axios.spread(function (resDetail, resTags, resComments, resOthers) {
			vm.setDetail(resDetail)
			vm.setTags(resTags)
			vm.setComments(resComments)
			vm.setOther(resOthers)
		}))
		.catch(e => {
			vm.setErrors(e)
		})
	},
	beforeRouteLeave (to, from, next) {
		next()
	},
	components: {
		'frame-design': Design,
	},
	methods: {
		setErrors (err) {
			this.errors.push(err)
		},
		setDetail (response) {
			this.detailDesign = response.data
		},
		setOther (response) {
			this.otherDesign = response.data
		},
		setTags (response) {
			this.tagDesign = response.data
		},
		setComments (response) {
			this.commentDesign = response.data
		},
		toLeft: function (event) {
			event.preventDefault()
			var wd = jQuery('#ctn-wall').width()
			var sc = jQuery('#ctn-wall').scrollLeft()
			if (sc >= 0) {
				jQuery('#ctn-wall').animate({scrollLeft: (sc - wd)}, 500)
			}
		},
		toRight: function (event) {
			event.preventDefault()
			var wd = jQuery('#ctn-wall').width()
			var sc = jQuery('#ctn-wall').scrollLeft()
			if (true) {
				jQuery('#ctn-wall').animate({scrollLeft: (sc + wd)}, 500)
			}
		}
	},
	created: function () {
		this.$setTop()
	}
}
</script>
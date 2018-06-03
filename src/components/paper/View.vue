<template>
	<div class="frame-pict col-full">
		<div v-if="detailPaper && detailPaper.length">
			<div v-for="dt in detailPaper">
				<div>
					<div class="panel panel-mobile">
						<div class="panel-content">
							<div class="page-panel width-800px">
								<div class="left-button">
									<button class="btn btn-circle btn-primary-color btn-focus" @click="$opBottomMessage('open','Still Builded!')">
										<span class="fa fa-lg fa-trash-alt"></span>
									</button>
									<button class="btn btn-circle btn-primary-color btn-focus" @click="$opBottomMessage('open','Still Builded!')">
										<span class="fa fa-lg fa-pencil-alt"></span>
									</button>
									<button class="btn btn-circle btn-primary-color btn-focus" @click="$opMenuPost('open')">
										<span class="fa fa-lg fa-ellipsis-h"></span>
									</button>
								</div>
								<div class="panel-title mobile"></div>
								<div class="right-button">
									<button class="btn btn-main-color btn-focus">
										<span class="icn fas fa-lg fa-plus"></span>
										<span class="ttl">Add Design</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="width-800px width-center padding-top-20px">
						<div class="info-wall padding-bottom-20px">
							<h1 class="ctn-main-font ctn-bold ctn-standar ctn-sek-color">
								{{dt.title}}
							</h1>
							<div class="ctn-main-font ctn-16px ctn-standar ctn-sek-color">
								{{dt.description}}
							</div>
						</div>
						<div class="menu-list width-all">
							<ul>
								<li>
									<div class="val">{{dt.views}}</div>
									<div class="ttl">Visited</div>
								</li>
								<li>
									<div class="val">{{dt.ttl_design}}</div>
									<div class="ttl">Designs</div>
								</li>
								<li>
									<div class="val">{{dt.ttl_watch}}</div>
									<div class="ttl">Watchs</div>
								</li>
								<router-link to="/ganjar18">
									<li class="right">
										<router-link :to="{'path': '/'+dt.username}">
										<div class="image image-40px image-circle" :style="{'background-image': 'url(http://localhost/paper/public/profile/thumbnails/'+dt.foto+')'}">
										</div>
									</router-link>
									</li>
								</router-link>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="width-800px width-center">
			<div v-if="errors && errors.length">
				<div v-for="er in errors">
					{{$opBottomMessage('open', er.message)}}
				</div>
			</div>
			<div class="padding-15px">
				<div v-if="tagPaper && tagPaper.length">
					<span v-for="tag in tagPaper">
						<router-link :to="{'path': '/tags/'+tag.tag}" class="frame-top-tag no-margin">
							{{tag.tag}}
						</router-link>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	data () {
		return {
			urlDetail: this.baseUrl + '/paper/' + this.$route.params.idpapers + '/detail',
			urlTagPaper: this.baseUrl + '/paper/' + this.$route.params.idpapers + '/tags',
			detailPaper: [],
			tagPaper: [],
			errors: []
		}
	},
	created: function () {
		axios.get(this.urlDetail)
		.then(response => {
			this.detailPaper = response.data
		})
		.catch(e => {
			this.errors.push(e)
		})

		//detail design
		axios.get(this.urlTagPaper)
		.then(response => {
			this.tagPaper = response.data
		})
		.catch(e => {
			this.errors.push(e)
		})
	}
}
</script>

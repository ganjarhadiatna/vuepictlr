<template>
	<div class="frame-pict on-top">
		<div class="col-full">
			<div class="panel panel-fixed">
				<div class="panel-content">
					<div class="page-panel width-800px need-pad-15px">
						<div class="left-button">
							<button class="btn btn-sekunder-color btn-focus btn-radius" @click="$goBack">
								<span class="fa fa-lg fa-arrow-left"></span>
								<span class="ttl">Back</span>
							</button>
						</div>
						<div class="panel-title mobile">
							<h2>Choose Wall</h2>
						</div>
						<div class="right-button">
							<button class="btn btn-main-color btn-focus">
								<span class="icn fas fa-lg fa-plus"></span>
								<span class="ttl">Create Wall</span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="choose-wall">
				<div class="content width-800px width-center">
					<div class="sid">
						<div class="cover-pict">
							<div class="block-1">
								<div class="image bg-image image-full" style="background-image: url('/static/2.jpg')"></div>
							</div>
							<div class="block-2">
								<div class="edit-txt max-80px txt-main-color" contenteditable="true"></div>
							</div>
						</div>
					</div>
					<div class="mid">
						<div class="ctn">
							<div class="pos top">
								<input type="text" name="search" class="txt txt-sekunder-color" placeholder="Search Wall">
							</div>
							<div class="pos mid">
								<div class="ttl">Top Choice</div>
								<div v-for="item in 3">
									<div class="frame-small-wall">
										<div class="wl-sid">
											<div class="image bg-image image-45px image-radius-small" style="background-image: url('/static/2.jpg')"></div>
										</div>
										<div class="wl-mid">
											<div class="wl-ttl">Name of Wall</div>
										</div>
										<div class="wl-righ">
											<router-link to="/wall/120451252345345">
											<button class="btn-circle btn-main-color btn-focus">
												<span class="fa fa-lg fa-bookmark"></span>
											</button>
											</router-link>
										</div>
									</div>
								</div>
								<div class="ttl">All Choice</div>
								<div v-for="item in 15">
									<div class="frame-small-wall">
										<div class="wl-sid">
											<div class="image bg-image image-45px image-radius-small" style="background-image: url('/static/2.jpg')"></div>
										</div>
										<div class="wl-mid">
											<div class="wl-ttl">Name of Wall</div>
										</div>
										<div class="wl-righ">
											<router-link to="/wall/120451252345345">
											<button class="btn-circle btn-main-color btn-focus">
												<span class="fa fa-lg fa-bookmark"></span>
											</button>
											</router-link>
										</div>
									</div>
								</div>
							</div>
							<div class="pos bot">
								<div class="frame-small-wall">
									<div class="wl-sid">
										<button class="btn-circle btn-main-color btn-focus">
											<span class="fa fa-lg fa-plus"></span>
										</button>
									</div>
									<div class="wl-mid">
										<div class="wl-ttl">Create Wall</div>
									</div>
									<div class="wl-righ">
										
									</div>
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
export default {
	created: function () {
		this.$setTop()
	}
}
</script>
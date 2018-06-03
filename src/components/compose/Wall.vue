<template>
	<div class="frame-pict on-top">
		<div class="col-full">
			<div class="panel panel-fixed">
				<div class="panel-content">
					<div class="page-panel width-600px need-pad-15px">
						<div class="left-button">
							<button class="btn btn-sekunder-color btn-focus btn-radius" @click="$goBack">
								<span class="fa fa-lg fa-arrow-left"></span>
								<span class="ttl">Back</span>
							</button>
						</div>
						<div class="panel-title">
							<h2>Create Wall</h2>
						</div>
						<div class="right-button">
							<router-link to="/wall/1234564345">
								<button class="btn btn-main-color btn-focus">
									<span class="ttl">Create</span>
								</button>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="add-popup">
				<div class="width-600px width-center">
					<div class="add-pict">
						<div class="ap-main">
							<div class="ctn">
								<div class="block bottom">
									<div class="ttl">Wall Title</div>
									<input type="text" name="title" class="txt txt-sekunder-color">
								</div>
								<div class="block bottom">
									<div class="ttl">Descriptions</div>
									<div class="edit-txt max-100px txt-sekunder-color" contenteditable="true"></div>
								</div>
								<div class="block bottom">
									<div class="ttl">Wall Private</div>
									<div>
										<span class="tgl fa fa-lg fa-toggle-off"></span>
									</div>
								</div>
								<div class="block bottom">
									<div class="ttl">Link</div>
									<input type="text" name="link" class="txt txt-sekunder-color">
								</div>
								<div class="block right">
									<input type="button" name="submit" class="btn btn-primary-color btn-focus" value="Cancel" @click="$goBack">
									<router-link to="/wall/1234564345">
										<input type="button" name="submit" class="btn btn-main-color btn-focus" value="Create">
									</router-link>
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
<template>
	<div class="frame-pict">
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
						<div class="panel-title">
							<h2>Add Pict</h2>
						</div>
						<div class="right-button">
							<router-link to="/compose/pict/1234564345/wall">
								<button class="btn btn-main-color btn-focus">
									<span class="ttl">Submit</span>
								</button>
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="add-popup">
				<div class="padding-15px"></div>
				<div class="width-800px width-center">
					<div class="add-pict grid-2x">
						<div class="ap-side">
							<div class="add-place pict-radius">
								<input type="file" name="pict" id="getPict">
								<label for="getPict">
									<div class="place-pict">
										<span class="icn fas fa-lg fa-plus-circle"></span>
									</div>
								</label>
							</div>
						</div>
						<div class="ap-main">
							<div class="ctn">
								<div class="block bottom">
									<div class="ttl">Descriptions</div>
									<div class="edit-txt max-100px txt-sekunder-color" contenteditable="true"></div>
								</div>
								<div class="block bottom">
									<div class="ttl">Adult Content</div>
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
									<router-link to="/compose/pict/1234564345/wall">
										<input type="button" name="submit" class="btn btn-main-color btn-focus" value="Submit">
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
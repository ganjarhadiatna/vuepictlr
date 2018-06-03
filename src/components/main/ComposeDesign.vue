<template>
	<div class="create-popup" id="addPict">
		<div class="frame-field-popup width-350px center">
			<div class="ff-top padding-bottom-15px">
				<div class="page-panel-small grid-2x">
					<div class="main">
						<div class="ttl">Add Pict</div>
					</div>
					<div class="side">
						<button class="btn btn-circle btn-primary-color btn-focus" @click="$opAddPict('hide')">
							<span class="fa fa-lg fa-times"></span>
						</button>
					</div>
				</div>
			</div>
			<div class="ff-mid padding-bottom-15px">
				<input type="file" name="pict" class="hide" id="getPictPopup">
				<label for="getPictPopup">
					<div class="frame-get-pict" title="get picture">
						<div class="icn">
							<span class="fa fa-lg fa-plus-circle"></span>
							<span class="ttl">Browse Pict</span>
						</div>
					</div>
				</label>
			</div>
			<div class="ff-pos ff-bot right">
				<button class="btn btn-primary-color btn-focus" @click="$opAddPict('hide')">
					Cancel
				</button>
				<button class="btn btn-main-color btn-focus" @click="$chooseWall('open')">
					Upload
				</button>
			</div>
		</div>
	</div>
</template>
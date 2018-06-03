<template>
	<div class="create-popup" id="chooseWall">
		<div class="frame-field-popup width-600px center">
			<div class="ff-top padding-bottom-15px">
				<div class="page-panel-small grid-2x">
					<div class="main">
						<div class="ttl">Add Image to Box</div>
					</div>
					<div class="side">
						<button class="btn btn-primary-color btn-radius btn-focus" @click="$createWall('open')">
							<span class="fa fa-lg fa-plus"></span>
							<span class="ttl">Create Box</span>
						</button>
						<button class="btn btn-circle btn-primary-color btn-focus" @click="$chooseWall('hide')">
							<span class="fa fa-lg fa-times"></span>
						</button>
					</div>
				</div>
			</div>
			<div class="grid-mid">
				<div class="gm-1">
					<div class="image image-full image-radius" style="background-image: url('/static/2.jpg')"></div>
					<div class="txt edit-txt txt-primary-color" contenteditable="true" placeholder="Write Descriptions"></div>
				</div>
				<div class="gm-2">
					<div class="ff-mid max-height">
						<div v-for="item in 10">
							<div class="frame-small-box" @click="$allHide">
								<div class="wl-sid">
									<div class="image image-40px image-radius" style="background-image: url('/static/2.jpg')"></div>
								</div>
								<div class="wl-mid">
									<div class="wl-ttl">
										<div class="ctn-main-font ctn-bold ctn-16px ctn-min-color">Name of Boxs</div>
										<div class="ctn-main-font ctn-thin ctn-12px ctn-sek-color">150 Picts</div>
									</div>
								</div>
								<div class="wl-rig">
									<button class="btn btn-main-color btn-focus">
										<span class="fas fa-lg fa-bookmark"></span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
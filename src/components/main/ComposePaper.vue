<template>
	<div class="create-popup" id="createWall">
		<div class="frame-field-popup width-350px center">
			<div class="ff-top">
				<div class="page-panel-small grid-2x">
					<div class="main">
						<div class="ttl">Create Box</div>
					</div>
					<div class="side">
						<button class="btn btn-circle btn-primary-color btn-focus" @click="$createWall('hide')">
							<span class="fa fa-lg fa-times"></span>
						</button>
					</div>
				</div>
			</div>
			<div class="ff-mid">
				<div class="ff-block padding-bottom-15px">
					<p>Name</p>
					<input type="text" name="tags" class="txt txt-primary-color" placeholder="Hero, Artist, Hobbies etc.">
				</div>
				<div class="ff-block padding-bottom-15px">
					<p>Description</p>
					<div class="txt edit-txt txt-primary-color" contenteditable="true" placeholder="Write Descriptions"></div>
				</div>
			</div>
			<div class="ff-pos ff-bot right">
				<button class="btn btn-primary-color btn-focus" @click="$createWall('hide')">
					<span>Cancel</span>
				</button>
				<button class="btn btn-main-color btn-focus" @click="$createWall('hide')">
					<span>Create</span>
				</button>
			</div>
		</div>
	</div>
</template>
<template>
	<div class="add-something" id="createPopup">
		<div class="create-main">
			<div class="cr-pos cr-pict">
				<div class="icn bdr-bottom pointer" @click="$opAddPict('open')">
					<span class="cr-ttl">Add Pict</span>
				</div>
			</div>
			<div class="cr-pos cr-wall">
				<div class="icn pointer" @click="$createWall('open')">
					<span class="cr-ttl">Create Box</span>
				</div>
			</div>
		</div>
	</div>
</template>
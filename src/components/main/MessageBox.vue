<template>
	<div class="create-popup" id="menuAlert">
		<div class="menu-post absolute">
			<div class="msg-pos msg-top bdr-bottom">
				<h3>Message</h3>
			</div>
			<div class="msg-pos msg-mid bdr-bottom">
				<p id="message"></p>
			</div>
			<div class="msg-pos msg-bot">
				<input type="button" name="ok" class="btn btn-main-color btn-focus" value="Ok" @click="$opMenuAlert('hide')">
			</div>
		</div>
	</div>
</template>
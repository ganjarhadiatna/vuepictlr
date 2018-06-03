<template>
	<div class="create-popup" id="menuMessage">
		<div class="menu-post absolute">
			<div class="msg-pos msg-top bdr-bottom">
				<h3>Message</h3>
			</div>
			<div class="msg-pos msg-mid bdr-bottom">
				<p id="message"></p>
			</div>
			<div class="msg-pos msg-bot">
				<input type="button" name="ok" class="btn btn-primary-color btn-focus mrg-right" value="No" @click="$opMenuMessage('hide')">
				<input type="button" name="ok" class="btn btn-main-color btn-focus" value="Yes" @click="$opMenuMessage('hide')">
			</div>
		</div>
	</div>
</template>
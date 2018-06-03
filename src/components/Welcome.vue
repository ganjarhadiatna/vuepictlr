<template>
	<div class="frame-guess">
		<div class="grid-2x">
			<div class="grid-1">
				<div class="bl detail col-400px">
					<ul>
						<li>
							<div class="icn fas fa-lg fa-th-large"></div>
							<div class="ttl ctn-main-font ctn-18px">Put your designs on papers.</div>
						</li>
						<li>
							<div class="icn fas fa-lg fa-lightbulb"></div>
							<div class="ttl ctn-main-font ctn-18px">Collecting much ideas.</div>
						</li>
						<li>
							<div class="icn fas fa-lg fa-users"></div>
							<div class="ttl ctn-main-font ctn-18px">Creat relations and hired.</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="grid-2">
				<div class="bl sign col-400px">
					<div class="image image-all image-bg-white">
						<img src="/static/img/Pictlr/9.png" alt="Pictlr">
					</div>
					<div class="ttl ctn-main-font ctn-20px ctn-sek-color padding-20px">
						It's a place for Designers.
					</div>
					<div class="banner">
						<div class="cover">
							<div class="title">
								<div class="ttl ctn-main-font ctn-14px ctn-bold ctn-sek-color padding-20px">
									Join Pictlr Today.
								</div>
								<div class="frame-info width-all">
									<router-link to="/login">
										<button class="mrg-bottom create btn btn-sekunder-color">
											<span class="ttl-post">Login</span>
										</button>
									</router-link>
									<router-link to="/register">
										<button class="btn btn-main-color">
											<span class="ttl-post">Register</span>
										</button>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<ul class="ctn-main-font ctn-14px">
				<li>
					<router-link to="/explore/fresh">Explore</router-link>
				</li>
				<li>
					<router-link to="/explore/fresh">Fresh</router-link>
				</li>
				<li>
					<router-link to="/explore/popular">Populars</router-link>
				</li>
				<li>
					<router-link to="/explore/trending">Trending</router-link>
				</li>
				<li>
					<a href="#">About Us</a>
				</li>
				<li>
					<a href="#">Privacy</a>
				</li>
				<li>
					<a href="#">Terms</a>
				</li>
				<li>
					<a href="#">Policy</a>
				</li>
				<li>
					<a href="#">FAQ</a>
				</li>
				<li>
					<a href="#">Jobs</a>
				</li>
				<li>
					<a href="#">Help</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		beforeCreate: function () {
            if (this.$session.exists()) {
                this.$router.push('/home')
            }
        }
	}
</script>
<template>
	<div class="content-popup" id="notif">
		<div class="panel-top">
			<div class="title">Notifications</div>
		</div>
		<div class="content-place show" id="act">
			<div>
				<div class="ctn-main-font ctn-bold ctn-14px ctn-sek-color">Today</div>
				<div v-for="item in 5">
					<div class="frame-notif bdr-bottom">
						<div class="ctn">
							<div class="side">
								<div class="image image-50px image-radius" style="background-image: url('/static/2.jpg')"></div>
							</div>
							<div class="main">
								<div class="desc">
									<strong>Username</strong>
									<span>Follow your Wall</span>
									<strong>Wall's name</strong>
								</div>
								<div class="date">
									7 Feb 2018 on 18:00 pm
								</div>
								<div class="frame-box">
									<div class="main">
										<div class="mid">
											<router-link to="/box/12045">
												<div class="review">
													<div class="pict image image-full" style="background-image: url('/static/3.jpg')"></div>
													<div class="pict image image-full" style="background-image: url('/static/1.jpg')"></div>
													<div class="pict image image-full" style="background-image: url('/static/2.jpg')"></div>
												</div>
											</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="item % 2">
						<div class="frame-notif bdr-bottom">
							<div class="ctn2">
								<div class="side">
									<div class="image image image-50px image-radius" style="background-image: url('/static/2.jpg')"></div>
								</div>
								<div class="main">
									<div class="desc">
										<strong>Username</strong>
										Commented on your picts
									</div>
									<div class="date">
										7 Feb 2018 on 18:00 pm
									</div>
								</div>
								<div class="righ">
									<div class="image image image-50px image-radius" style="background-image: url('/static/2.jpg')"></div>
								</div>
							</div>
						</div>
					</div>
					<div v-if="item == 3">
						<div class="ctn-main-font ctn-bold ctn-14px ctn-sek-color">Yesterday</div>
						<div class="frame-notif bdr-bottom">
							<div class="ctn">
								<div class="side">
									<div class="image image image-50px image-radius" style="background-image: url('/static/2.jpg')"></div>
								</div>
								<div class="main">
									<div class="desc">
										<strong>Username</strong>
										Saved your picts on
										<strong>Wall's name</strong>
									</div>
									<div class="date">
										7 Feb 2018 on 18:00 pm
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="frame-more padding-20px">
					<button class="trg btn btn-circle btn-sekunder-color btn-border btn-focus">
						<span class="fa fa-lg fa-plus"></span>
					</button>
				</div>
			</div>
		</div>
		<div class="content-place" id="fol">
			<div>			
				<div class="ctn-main-font ctn-bold ctn-14px ctn-sek-color">Today</div>
				<div v-for="item in 5">
					<div class="frame-notif bdr-bottom">
						<div class="ctn">
							<div class="side">
								<div class="image image image-50px image-radius" style="background-image: url('/static/2.jpg')"></div>
							</div>
							<div class="main">
								<div class="desc">
									<strong>Username</strong>
									started following you
								</div>
								<div class="date">
									7 Feb 2018 on 18:00 pm
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
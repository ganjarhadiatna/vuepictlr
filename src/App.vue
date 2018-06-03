<template>
	<div id="app">
		<div class="header">
			<div class="top-line"></div>
			<div class="main-header">
				<div class="place">
					<div class="lef">
						<router-link to="/">
							<div class="logo">
								<img src="/static/img/Pictlr/9.png" alt="Pictlr">
							</div>
						</router-link>
					</div>
					<div class="mid">
						<button class="btn btn-circle btn-sekunder-color btn-focus icn-mobile">
							<span class="fa fa-lg fa-arrow-left"></span>
						</button>
						<div class="search">
							<button type="submit" class="btn btn-circle btn-primary-color">
								<span class="fa fa-lg fa-search"></span>
							</button>
							<input type="text" name="search" class="txt txt-main-color" id="search-field" placeholder="Search" required="" v-model="search" @keyup.enter="toSearch">
						</div>
					</div>
					<div class="rig">
						<router-link to="/">
							<button class="btn btn-primary-color btn-radius btn-focus" id="menu-feed">
								Home Feeds
							</button>
						</router-link>
						<router-link to="/explore/fresh">
							<button class="btn btn-primary-color btn-radius btn-focus" id="explore">
								Explore
							</button>
						</router-link>
						<button class="btn btn-circle btn-primary-color btn-focus" @click="opCtr" id="menu-ctr">
							<span id="collect" class="mn-icn fas fa-lg fa-bars"></span>
						</button>

						<frame-menu-header></frame-menu-header>

					</div>

					<!--content popup-->
					<frame-add-menu></frame-add-menu>

					<!--collections-->
					<frame-collections></frame-collections>

					<!--notifications-->
					<frame-notifications></frame-notifications>

				</div>
			</div>
		</div>
		<div class="body">
			<router-view/>
			<router-view name="design" :key="$route.fullPath"/>
			<router-view name="paper" :key="$route.fullPath"/>
			<router-view name="content" :key="$route.fullPath"/>
			<router-view name="explore" :key="$route.fullPath"/>

			<!--create popup-->
			<frame-menu></frame-menu>

			<!--message & banner-->
			<frame-message-question></frame-message-question>
			<frame-message-box></frame-message-box>
			<frame-message-bottom></frame-message-bottom>

			<!--compose-->
			<frame-compose-design></frame-compose-design>
			<frame-compose-paper></frame-compose-paper>

			<!--Save to Box-->
			<frame-save-design></frame-save-design>
		</div>
	</div>
</template>

<script>
import jQuery from 'jquery'
import MessageQuestion from '@/components/main/MessageQuestion'
import MessageBox from '@/components/main/MessageBox'
import MessageBottom from '@/components/main/MessageBottom'
import AddMenu from '@/components/main/AddMenu'
import Collections from '@/components/main/Collections'
import Notifications from '@/components/main/Notifications'
import Menu from '@/components/main/Menu'
import ComposeDesign from '@/components/main/ComposeDesign'
import ComposePaper from '@/components/main/ComposePaper'
import SaveDesign from '@/components/main/SaveDesign'
import MenuHeader from '@/components/main/MenuHeader'

jQuery(document).on('click', function(event) {
	jQuery('#ctr').hide()
	jQuery('#notif').hide()
	jQuery('#createPopup').hide()
	jQuery('#fastSavePict').hide()
})
jQuery(document).ready(function() {
	jQuery('#notif *').on('click', function(event) {
		event.stopPropagation()
		jQuery('#notif').show()
	})
	jQuery('#search-field').focusin(function(event) {
		jQuery('.header .main-header .place .mid .search').addClass('focus')
	}).focusout(function(event) {
		jQuery('.header .main-header .place .mid .search').removeClass('focus')
	})
})

export default {
	name: 'App',
	data () {
		return {
			search: '',
			icnPrivate: 'tgl tgl-sekunder-color pa fa fa-lg fa-toggle-off'
		}
	},
	components: {
		'frame-message-box': MessageBox,
		'frame-message-bottom': MessageBottom,
		'frame-message-question': MessageQuestion,
		'frame-add-menu': AddMenu,
		'frame-collections': Collections,
		'frame-notifications': Notifications,
		'frame-menu': Menu,
		'frame-compose-design': ComposeDesign,
		'frame-compose-paper': ComposePaper,
		'frame-save-design': SaveDesign,
		'frame-menu-header': MenuHeader
	},
	methods: {
		toSearch: function () {
			if (this.search !== '') {
				this.$router.replace('/search/' + this.search.toLowerCase())
			}
		},
		opCtr: function (event) {
			event.stopPropagation()
			jQuery('#ctr').show()
			jQuery('#notif').hide()
			jQuery('#createPopup').hide()
		},
		privateAccount: function () {
			if (this.icnPrivate === 'tgl tgl-sekunder-color pa fa fa-lg fa-toggle-off') {
				this.icnPrivate = 'tgl tgl-main-color sel pa fa fa-lg fa-toggle-on'
			} else {
				this.icnPrivate = 'tgl tgl-sekunder-color pa fa fa-lg fa-toggle-off'
			}
		}
	}
}
</script>

<style>
	@import './assets/icon/css/fontawesome-all.min.css';
	@import './assets/scss/main.css';
</style>

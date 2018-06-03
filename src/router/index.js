import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Search from '@/components/search/View'
import SearchDesign from '@/components/search/Design'
import SearchPaper from '@/components/search/Paper'
import SearchUser from '@/components/search/User'
import Design from '@/components/design/View'
import placeImage from '@/components/design/Image'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import Paper from '@/components/paper/View'
import PaperDesign from '@/components/paper/Design'
import Profile from '@/components/user/Profile'
import Setting from '@/components/user/setting/Setting'
import SettingProfile from '@/components/user/setting/Profile'
import SettingPassword from '@/components/user/setting/Password'
import ProfileDesign from '@/components/user/Design'
import ProfilePaper from '@/components/user/Paper'
import ProfileSaved from '@/components/user/Saved'
import ComposePict from '@/components/compose/Pict'
import ComposeWall from '@/components/compose/Wall'
import ComposeSave from '@/components/compose/Save'
import Save from '@/components/compose/Save'
import Welcome from '@/components/Welcome'
import Explore from '@/components/explore/View'
import ExploreDesign from '@/components/explore/Design'
import ExploreTag from '@/components/explore/Tag'
import Tags from '@/components/tags/View'
import Topic from '@/components/collections/Topic'

import NotFound from '@/components/404/Index'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/welcome',
			name: 'Welcome',
			component: Welcome
		},
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/home',
			name: 'Home 2',
			component: Home
		},
		{
			path: '/explore/news/:idtags',
			name: "Explore Tag",
			components: {
				default: Explore,
				explore: ExploreTag
			}
		},
		{
			path: '/explore/:ctr',
			name: "Explore Designs",
			components: {
				default: Explore,
				explore: ExploreDesign
			}
		},
		{
			path: '/search',
			name: 'Search Second',
			components: {
				default: Search,
				content: SearchDesign
			}
		},
		{
			path: '/search/:ctr',
			name: 'Search',
			components: {
				default: Search,
				content: SearchDesign
			}
		},
		{
			path: '/search/:ctr/designs',
			name: 'Search Designs',
			components: {
				default: Search,
				content: SearchDesign
			}
		},
		{
			path: '/search/:ctr/papers',
			name: 'Search Papers',
			components: {
				default: Search,
				content: SearchPaper
			}
		},
		{
			path: '/search/:ctr/users',
			name: 'Search Users',
			components: {
				default: Search,
				content: SearchUser
			}
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/register',
			name: 'Register',
			component: Register
		},
		{
			path: '/compose/pict',
			name: 'Compose Pict',
			component: ComposePict
		},
		{
			path: '/compose/wall',
			name: 'Compose Wall',
			component: ComposeWall
		},
		{
			path: '/compose/pict/:idpict/wall',
			name: 'Compose Save',
			component: ComposeSave
		},
		{
			path: '/collect/:ctr',
			name: 'Collections Topic',
			components: {
				content: Tags
			}
		},
		{
			path: '/tags/:ctr',
			name: 'Collections Tags',
			components: {
				content: Tags
			}
		},
		{
			path: '/:username',
			name: 'Profile',
			components: {
				default: Profile,
				content: ProfilePaper
			}
		},
		{
			path: '/:username/setting',
			name: 'Setting',
			components: {
				default: Setting
			}
		},
		{
			path: '/:username/setting/profile',
			name: 'Setting Profile',
			components: {
				default: SettingProfile
			}
		},
		{
			path: '/:username/setting/password',
			name: 'Setting Password',
			components: {
				default: SettingPassword
			}
		},
		{
			path: '/:username/designs',
			name: 'Profile Design',
			components: {
				default: Profile,
				content: ProfileDesign
			}
		},
		{
			path: '/:username/papers',
			name: 'Profile Paper',
			components: {
				default: Profile,
				content: ProfilePaper
			}
		},
		{
			path: '/:username/saved',
			name: 'Profile Saved',
			components: {
				default: Profile,
				content: ProfileSaved
			}
		},
		{
			path: '/:username/paper/:idpapers/design/:iddesign',
			name: 'Design',
			components: {
				design: Design,
			}
		},
		{
			path: '/:username/paper/:idpapers',
			name: 'Paper',
			components: {
				default: Paper,
				content: PaperDesign
			}
		},
		{
			path: '*',
			name: 'Not Found',
			component: NotFound
		}
	],
	mode: 'history'
})

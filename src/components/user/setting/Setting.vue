<template>
	<div class="col-content">
		<!--menu user-->
		<div class="panel panel-mobile none">
			<div class="panel-content none">
				<div class="page-panel col-small">
					<div class="grid-1 left-button"></div>
					<div class="grid-2 panel-title">
						<h2>Setting</h2>
					</div>
					<div class="grid-3 right-button"></div>
				</div>
			</div>
		</div>
		
		<div class="menu-user margin-menu-user">
			<div class="place menu-user-edit width-600px width-center">
				<div class="mid">

					<div class="main">
						<!--menu left-->
						<div class="pl-left">
							<div class="block">
								<h4>Account</h4>
								<ul>
                                    <router-link :to="{path : '/' + $route.params.username + '/setting/profile'}">
                                        <li>
                                            <label class="ttl">Edit Profile</label>
                                            <label class="icn fa fa-lg fa-caret-right"></label>
                                        </li>
                                    </router-link>
                                    <router-link :to="{path : '/' + $route.params.username + '/setting/password'}">
                                        <li>
                                            <label class="ttl">Change Password</label>
                                            <label class="icn fa fa-lg fa-caret-right"></label>
                                        </li>
                                    </router-link>
								    <li @click="privateAccount" id="private-account">
								    	<label class="ttl">Private Account</label>
								    	<label :class="icnPrivate" id="icn-private" key="public"></label>
								    </li>
								</ul>
							</div>
							<div class="block">
								<h4>Informations</h4>
								<ul>
								    <li>
								    	<label class="ttl">About Us</label>
								    </li>
								    <li>
								    	<label class="ttl">Contacts</label>
								    </li>
								    <li>
								    	<label class="ttl">Policy</label>
								    </li>
								    <li>
								    	<label class="ttl">Terms & Conditions</label>
								    </li>
								    <li>
								    	<label class="ttl">Jobs</label>
								    </li>
								    <li>
								    	<label class="ttl">Help</label>
								    </li>
								</ul>
							</div>
							<div class="block">
								<h4>Others</h4>
								<ul>
								    <li>
								    	<label class="ttl">Report Bugs</label>
								    	<label class="icn fa fa-lg fa-bug"></label>
								    </li>
								    <li>
								    	<label class="ttl">Feed Back</label>
								    	<label class="icn fa fa-lg fa-comments"></label>
								    </li>
								    <li>
								    	<label class="ttl">Logout</label>
								    	<label class="icn fa fa-lg fa-power-off"></label>
								    </li>
								</ul>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import jQuery from 'jquery'
export default {
    data () {
        return {
            icnPrivate: 'icn pa fa fa-lg fa-toggle-off'
        }
    },
    beforeCreate: function () {
        this.$pathLocate('profile')
    },
    methods: {
        goBack: function () {
            window.history.back()
        },
        privateAccount: function () {
            if (this.icnPrivate === 'icn pa fa fa-lg fa-toggle-off') {
                this.icnPrivate = 'icn sel pa fa fa-lg fa-toggle-on'
            } else {
                this.icnPrivate = 'icn pa fa fa-lg fa-toggle-off'
            }
        }
    }
}
</script>
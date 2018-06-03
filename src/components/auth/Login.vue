<template>
<div class="place-fixed">
    <div id="login" class="frame-sign">
        <div class="top">
            <router-link to="/welcome">
        	   <img src="/static/img/Pictlr/9.png" alt="Pictlr">
            </router-link>
        </div>
        <div class="mid">
            <div class="block">
                <h2 class="padding-bottom-15px">
                    Login
                </h2>
                <div v-if="alerts && alerts.length">
                    <div class="alert theme-error">
                        Message: {{alerts}}
                    </div>
                </div>
                <div v-if="errors && errors.length">
                    <div v-for="er in errors">
                        <div class="alert theme-error">
                            Error: {{er.message}}
                        </div>
                    </div>
                </div>
            </div>
            <form class="form-horizontal" id="form-login" @submit.prevent="doLogin">
                <div class="block">
                    <div class="form-group">
                        <input id="email" type="email" class="txt txt-primary-color" name="email" placeholder="Email or Username" v-model="user.email" required autofocus>
                    </div>
                </div>
                <div class="block">
                    <div class="form-group">
                        <input id="password" type="password" class="txt txt-primary-color" placeholder="Password" name="password" v-model="user.password" required>
                    </div>
                </div>
                <div class="block padding-10px">
                    <div class="checkbox">
                        <label class="btn ctn-main-font ctn-sek-color">
                            <input type="checkbox" name="remember"> Remember Me
                        </label>
                    </div>
                </div>
                <div class="block">
                    <input type="submit" name="login" class="btn btn-main-color btn-focus" value="Login">
                    <router-link to="/register">
                        <input type="button" name="signup" class="btn btn-sekunder-color" value="Register">
                    </router-link>
                </div>
            </form>
        </div>
        <div class="bot"></div>
    </div>
    <div class="padding-20px"></div>
</div>
</template>
<script type="text/javascript">
    import Vue from 'vue'
    export default {
        data () {
            return {
                urlLogin: this.baseUrl+'/login',
                user: {
                    email: '',
                    password: ''
                },
                alerts: '',
                errors: []
            }
        },
        beforeCreate: function () {
            if (this.$session.exists()) {
                this.$router.push('/home')
            }
            //console.log(window.location.host);
        },
        methods: {
            doLogin: function () {
                this.alerts = ''
                this.errors = []
                var vm = this
                axios.post(this.urlLogin, {
                    'email': this.user.email,
                    'password': this.user.password
                })
                .then(function (response) {
                    if (response.data.success === true) {
                        vm.$session.start()
                        vm.$session.set('jwt', response.data.api_token)
                        //Vue.http.headers.common['Authorization'] = 'Bearer ' + response.data.api_token
                        //vm.$router.push('/home')
                        //window.location.host
                        window.location = 'http://localhost:8080/home'
                    } else {
                        vm.alerts = response.data.message
                    }
                })
                .catch(e => {
                    console.log(e)
                    this.errors.push(e)
                });
            }
        }
    }
</script>

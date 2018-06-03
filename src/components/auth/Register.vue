<template>
<div class="place-fixed">
    <div class="frame-sign">
        <div class="top">
            <router-link to="/welcome">
        	   <img src="/static/img/Pictlr/9.png" alt="Pictlr">
            </router-link>
        </div>
        <div class="mid">
            <div class="block">
                <h2>
                    Register Here
                </h2>
            </div>
            <form class="form-horizontal" method="POST">
                <div class="block">
                    <div class="form-group">
                        <input id="email" type="email" class="txt txt-primary-color" name="email" placeholder="Your Email" required autofocus>
                    </div>
                </div>
                <div class="block">
                    <div class="form-group">
                        <input id="password" type="password" class="txt txt-primary-color" placeholder="Create Password" name="password" required>
                    </div>
                </div>
                <div class="block">
                    <div class="form-group">
                        <input id="age" type="number" class="txt txt-primary-color" placeholder="Age" name="age" min="0" max="120" required>
                    </div>
                </div>
                <div class="block">
                    <input type="submit" name="login" class="btn btn-main-color btn-focus" value="Continue">
                    <router-link to="/login">
                        <input type="button" name="signup" class="btn btn-sekunder-color" value="Login">
                    </router-link>
                </div>
            </form>
        </div>
        <div class="bot"></div>
    </div>
    <div class="padding-20px"></div>
</div>
</template>

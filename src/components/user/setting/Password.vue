<template>
    <!--menu right-->
    <div>
        <div class="panel panel-mobile none">
			<div class="panel-content none">
				<div class="page-panel col-small">
					<div class="grid-1 left-button"></div>
					<div class="grid-2 panel-title">
						<h2>Setting Password</h2>
					</div>
					<div class="grid-3 right-button"></div>
				</div>
			</div>
		</div>
        <div class="menu-user margin-menu-user">
			<div class="place menu-user-edit width-600px width-center">
				<div class="mid">
					<div class="main">
                        <div class="block edit" id="edit-password">
                            <form>
                                <ul>
                                    <li class="space">
                                        <label class="icn-edit fa fa-lg fa-key"></label>
                                        <label class="ttl-edit"><input type="password" name="name" required="true" class="txt txt-primary-color" placeholder="Current Password"></label>
                                    </li>
                                    <li>
                                        <label class="icn-edit fa fa-lg fa-key"></label>
                                        <label class="ttl-edit"><input type="password" name="name" required="true" class="txt txt-primary-color" placeholder="New Password"></label>
                                    </li>
                                    <li>
                                        <label class="icn-edit fa fa-lg fa-key"></label>
                                        <label class="ttl-edit"><input type="password" name="name" required="true" class="txt txt-primary-color" placeholder="New Password, again"></label>
                                    </li>
                                </ul>
                                <div class="others">
                                    <input type="button" name="cancel" class="btn btn-primary-color btn-focus" value="Cancel" @click="$goBack()">
                                    <input type="submit" name="save" class="btn btn-main-color btn-focus" value="Save">
                                </div>
                            </form>
                        </div>
					</div>
				</div>
			</div>
        </div>
	</div>
</template>

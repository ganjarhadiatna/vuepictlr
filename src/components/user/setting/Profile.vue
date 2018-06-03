<template>
    <!--menu right-->
    <div>
        <div class="panel panel-mobile none">
			<div class="panel-content none">
				<div class="page-panel col-small">
					<div class="grid-1 left-button"></div>
					<div class="grid-2 panel-title">
						<h2>Setting Profile</h2>
					</div>
					<div class="grid-3 right-button"></div>
				</div>
			</div>
		</div>
        <div class="menu-user margin-menu-user">
			<div class="place menu-user-edit width-600px width-center">
				<div class="mid">
					<div class="main">
                        <div class="block edit">
                            <h4>Public Informations</h4>
                            <form>
                                <ul>
                                    <li>
                                        <label class="icn-edit fa fa-lg fa-user"></label>
                                        <label class="ttl-edit">
                                            <input type="text" name="name" required="true" class="txt txt-primary-color" placeholder="Full Name">
                                        </label>
                                    </li>
                                    <li>
                                        <label class="icn-edit fa fa-lg fa-id-card"></label>
                                        <label class="ttl-edit"><input type="text" name="name" required="true" class="txt txt-primary-color" placeholder="Username"></label>
                                    </li>
                                    <li>
                                        <label class="icn-edit fa fa-lg fa-info-circle"></label>
                                        <label class="ttl-edit"><textarea class="txt edit-txt txt-primary-color" placeholder="About You"></textarea></label>
                                    </li>
                                    <li>
                                        <label class="icn-edit fa fa-lg fa-link"></label>
                                        <label class="ttl-edit"><input type="text" name="name" required="true" class="txt txt-primary-color" placeholder="Website"></label>
                                    </li>
                                </ul>
                                <h4>Private Informations</h4>
                                <ul>
                                    <li>
                                        <label class="icn-edit fa fa-lg fa-envelope"></label>
                                        <label class="ttl-edit"><input type="text" name="name" required="true" class="txt txt-primary-color" placeholder="Email"></label>
                                    </li>
                                    <li>
                                        <label class="icn-edit fa fa-lg fa-transgender"></label>
                                        <label class="ttl-edit"><input type="text" name="name" required="true" class="txt txt-primary-color" placeholder="Gender"></label>
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

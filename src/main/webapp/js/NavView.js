(function(){
	brite.viewDefaultConfig.loadTmpl = true;
	
	brite.registerView("NavView",{emptyParent:true},{
		create:function(data,config){
			return render("tmpl-NavView");
		},
		events:{
			"click; .signout":function(event){
				var userDao = brite.dao("User");
				userDao.signOut().pipe(function(status){
					brite.display("LoginView",$mainview);
					var $navview  = $("body").find("#navview");
					brite.destroy($navview);
				});
			}
		}
	})
})();
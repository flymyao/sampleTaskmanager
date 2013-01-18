(function(){
	brite.viewDefaultConfig.loadTmpl = true;
	brite.registerView("LoginView",
			{emptyParent:true},{
				create:function(data,config){
					return render("tmpl-LoginView");
				},
				events:{
					"click; [name='loginForm'] .btn":function(event){
						  var UserDao = brite.dao("User");
						  UserDao.login($("[name='username']",this.$el).val(),$("[name='password']",this.$el).val()).pipe(function(status){
							 if(status.success)
								{
								brite.display("MainView",$("body").find("#mainview"));
								}
							 else{
								 alert("error name or password.");
							 }
						  });
						  
					 
					},
					"click; [name='registerForm'] .btn":function(event){
						 var UserDao = brite.dao("User");
						  UserDao.addUser($("[name='username']",this.$el).val(),$("[name='password']",this.$el).val()).pipe(function(status){
							 if(status.success)
								{
								 brite.display("MainView",$("body").find("#mainview"));								 
								}
							 else
								 {
								 alert("the username:"+$("[name='username']",this.$el).val()+" has been registed.please change for another username.");		
								 }
					});
				}
				}
			});
	
})();

(function(w){
	Handlebars.templates = Handlebars.templates || {};  
	w.render = function(templateName,data){
	  var tmpl = Handlebars.templates[templateName];
	  if (!tmpl){
	    tmpl = Handlebars.compile($("#" + templateName).html());
	    Handlebars.templates[templateName] = tmpl;
	  }
	  return tmpl(data);
	};
 })(window);
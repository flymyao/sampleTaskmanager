(function(){
	brite.viewDefaultConfig.loadTmpl = true;
	
	brite.registerView("LoginView",	{emptyParent:true},{
				create:function(data,config){
					return render("tmpl-LoginView");
				},
				events:{
					"click; [name='loginForm'] .btn":function(event){
						 var remoteDao = brite.dao("User");
						 remoteDao.login($("[name='loginForm'] [name='username']",this.$el).val(),
								 $("[name='loginForm'] [name='password']",this.$el).val()).pipe(function(status){
							 if(status.success){
								 var projectDao = brite.dao("Project");
								 projectDao.daoList().pipe(function(projectList){
									 brite.display("ProjectView",$("body").find("#mainview"),{projectList:projectList});
								 });
								}
							 else{
								 alert("error name or password.");
							 }
						  });
					},
					"click; [name='registerForm'] .btn":function(event){
						 var remoteDao = brite.dao("User");
						 remoteDao.register($("[name='registerForm'] [name='username']",
								 this.$el).val(),$("[name='registerForm'] [name='password']",this.$el).val()).pipe(function(status){
							 if(status.success)
								 brite.display("MainView",$("body").find("#mainview"));								 
							 else
								 alert("the username:"+$("[name='username']",this.$el).val()+" has been registed.please change for another username.");		
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
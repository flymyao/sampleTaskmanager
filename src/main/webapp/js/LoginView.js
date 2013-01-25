(function(){
	brite.viewDefaultConfig.loadTmpl = true;
	
	brite.registerView("LoginView",	{emptyParent:true},{
				create:function(data,config){
					return render("tmpl-LoginView");
				},
				events:{
					"click; [name='loginForm'] .btn":function(event){
						 var userDao = brite.dao("User");
						 userDao.signIn($("[name='loginForm'] [name='username']",this.$el).val(),
								 $("[name='loginForm'] [name='password']",this.$el).val()).pipe(function(status){
							 if(status.success){
								 var $navview  = $("body").find("#navview");
								 brite.display("NavView",$navview);
								 var projectDao = brite.dao("Project");
								 var ticketDao = brite.dao("Ticket");
								 projectDao.daoList().pipe(function(projectList){
									 brite.display("ProjectView",$("body").find("#projectnav"),{projectList:projectList});
									 if(projectList[0]){
									    ticketDao.daoList({"projectId":projectList[0].id}).pipe(function(ticketList){
										  brite.display("TicketView",$mainview,{ticketList:ticketList});
										});
									 }else{
										 $("#mainview").empty();
									 }
								 });
								}
							 else{
								 alert("error name or password.");
							 }
						  });
					},
					"click; [name='registerForm'] .btn":function(event){
						 var userDao = brite.dao("User");
						 var userName = $("[name='registerForm'] [name='username']",this.$el).val();
						 var password = $("[name='registerForm'] [name='password']",this.$el).val();
						 if(!(userName&&password)){
							 alert("please enter the username or password.");
							 return false;
						 }
						 userDao.register(userName,password).pipe(function(status){
							 if(status.success){
								 var $navview  = $("body").find("#navview");
								 brite.display("NavView",$navview);
								 var projectDao = brite.dao("Project");
								 var ticketDao = brite.dao("Ticket");
								 projectDao.daoList().pipe(function(projectList){
									 brite.display("ProjectView",$("body").find("#projectnav"),{projectList:projectList});
									 if(projectList[0]){
										 ticketDao.daoList({"projectId":projectList[0].id}).pipe(function(ticketList){
											  brite.display("TicketView",$mainview,{ticketList:ticketList});
										 });
								    }else{
										 $("#mainview").empty();
									}
								 });
							 }
							 else
								 alert("the username:"+$("[name='username']",this.$el).val()+" has been registed.please change for another username.");		
					     });
					}
			  }
	});
})();
(function(){
	brite.viewDefaultConfig.loadTmpl = true;
	
	brite.registerView("ProjectView",{emptyParent:true},{
	  create:function(data,config){
			return render("tmpl-ProjectView",{projectList:data.projectList});
	  },
	  events:{
		  "click; .addBtn":function(event){
			  var projectDao = brite.dao("Project");
			  var projectName = $(".addProject").val();
			  if(!projectName){
				  alert("Please input the project name");
				  return false;
			  }
			  projectDao.daoSave({
				  name:projectName
			  }).pipe(function(){
				  projectDao.daoList().pipe(function(projectList){
						 brite.display("ProjectView",$("body").find("#mainview"),{projectList:projectList});
					 });
			  	});
		  },
		  "click; .deleteBtn":function(event){
			  var projectDao = brite.dao("Project");
			  projectDao.daoDelete($(event.target).closest("tr").attr("data-project-id")).pipe(function(){
				  projectDao.daoList().pipe(function(projectList){
						 brite.display("ProjectView",$("body").find("#mainview"),{projectList:projectList});
					 });
			  	});
		  },
		  "click; .addTicketBtn":function(event){
			 alert("add ticket,not implemented.");
		  },
		  "click; .projectName":function(event){
			  var ticketDao = brite.dao("Ticket");
			  var $TicketView = $(event.target).next().next();
			  ticketDao.daoList().pipe(function(ticketList){
				  brite.display("TicketView",$TicketView,{ticketList:ticketList});
			  });
		  }
	  }
	});
})();
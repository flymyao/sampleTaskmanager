(function(){
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
						 brite.display("ProjectView",$("body").find("#projectnav"),{projectList:projectList});
				  });
			  });
		  },
		  "click; .deleteBtn":function(event){
			  var projectDao = brite.dao("Project");
			  projectDao.daoDelete($(event.target).closest("tr").attr("data-project-id")).pipe(function(){
				  projectDao.daoList().pipe(function(projectList){
						 brite.display("ProjectView",$("body").find("#projectnav"),{projectList:projectList});
				  });
			  });
		  },
		  "click; .projectName":function(event){
			  var ticketDao = brite.dao("Ticket");
			  ticketDao.daoList({projectId:$(event.target).closest("tr").attr("data-project-id")}).pipe(function(ticketList){
				  brite.display("TicketView",$mainview,{ticketList:ticketList});
			  });
		  },
		  "click; .showTicketModal":function(event){
			  var projectDao = brite.dao("Project");
			  projectDao.daoGet($(event.target).closest("tr").attr("data-project-id")).pipe(function(project){
				  brite.display("AddTicketView",$mainview,{project:project});
			  });
		  },
		  "click; .editBtn":function(event){
			  var projectDao = brite.dao("Project");
			  projectDao.daoGet($(event.target).closest("tr").attr("data-project-id")).pipe(function(project){
				  brite.display("EditProjectView",$("body").find("#projectnav"),{project:project});
			  });
		  }
	  	}
	});
})();
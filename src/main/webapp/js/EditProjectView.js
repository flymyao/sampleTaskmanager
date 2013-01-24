(function(){
	brite.viewDefaultConfig.loadTmpl = true;
	
	brite.registerView("EditProjectView",{emptyParent:false},{
		create:function(data,config){
			return render("tmpl-EditProjectView",{project:data.project});
		},
		events:{
			"click; .close":function(event){
				this.$el.remove();
			},
			"click; .updateProjectBtn":function(event){
				var modal = this;
				var projectDao = brite.dao("Project");
				var projectId =$(event.target).parent().attr("data-project-id");
				projectDao.daoUpdate({
					  name:$(event.target).prev().val(),
					  "id":projectId
				  }).pipe(function(){
					  projectDao.daoList().pipe(function(projectList){
							 brite.display("ProjectView",$("body").find("#mainview"),{projectList:projectList});
						 });
						  modal.$el.remove();
				    });
			}
		}
	})
})();
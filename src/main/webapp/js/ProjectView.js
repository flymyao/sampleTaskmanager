(function(){
	brite.viewDefaultConfig.loadTmpl = true;
	
	brite.registerView("ProjectView",{emptyParent:true},{
	  create:function(data,config){
			return render("tmpl-ProjectView",{projectList:data.projectList});
	  }
	});
})();
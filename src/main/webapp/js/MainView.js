(function(){
	brite.viewDefaultConfig.loadTmpl = true;
	
	brite.registerView("MainView",{emptyParent:true},{
	  create:function(data,config){
			return render("tmpl-MainView");
	}
	});
})();
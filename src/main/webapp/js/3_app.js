(function(){
	brite.registerDao(new brite.RemoteDao("User"));
	brite.registerDao(new brite.RemoteDao("Project"));
	brite.registerDao(new brite.RemoteDao("Ticket"));
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
Handlebars.templates = Handlebars.templates || {};


// template --- tmpl-AddTicketView ---
Handlebars.templates['tmpl-AddTicketView'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"addTicketView\">\n	</div>\n	<div class=\"modal addTicketContent\">\n		<div class=\"modal-header\">\n    		<button type=\"button\" class=\"close\">&times;</button>\n    		<h3>Add Tikect for ";
  stack1 = depth0.project;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</h3>\n		</div>\n		<div class=\"modal-footer\" data-project-id=\"";
  stack1 = depth0.project;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\"> \n			<input type=\"text\" name=\"ticketName\" class=\"ticketTextFiled\" placeholder=\"Enter the Ticket Name\"/>\n			<input type=\"text\" name=\"ticketContent\" class=\"ticketTextFiled\" placeholder=\"Ticket Content\"/>\n		  <button class=\"btn btn-primary addTicketBtn\" type=\"button\">Add Ticket</button>\n		</div>\n	</div>";
  return buffer;}
);

// template --- tmpl-EditProjectView ---
Handlebars.templates['tmpl-EditProjectView'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"editProjectView\">\n	</div>\n	<div class=\"modal modalContent\">\n		<div class=\"modal-header\">\n    		<button type=\"button\" class=\"close\">&times;</button>\n    		<h3>Edit Project for ";
  stack1 = depth0.project;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</h3>\n  		</div>\n  		<div class=\"form-inline\" class=\"modal-footer\" data-project-id=\"";
  stack1 = depth0.project;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.id;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">\n			<input type=\"text\" name=\"projectName\" value=\"";
  stack1 = depth0.project;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" class=\"projectTextFiled\" placeholder=\"Enter the Ticket Name\"/>\n			<button class=\"btn btn-primary updateProjectBtn\" type=\"button\">Update</button>\n		</div>\n	</div>";
  return buffer;}
);

// template --- tmpl-LoginView ---
Handlebars.templates['tmpl-LoginView'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"LoginView container\">\n		<div class=\"tabbable\">\n	 		<ul class=\"nav nav-tabs\">\n	   			<li class=\"active\"><a href=\"#loginForm\" data-toggle=\"tab\">Sign in</a></li>\n				<li><a href=\"#register\" data-toggle=\"tab\">Register</a></li>\n	 		</ul>\n			<div class=\"tab-content\">\n				<div class=\"tab-pane active\" id=\"loginForm\">\n					<form name=\"loginForm\">\n			   			<h2 class=\"form-signin-heading\">Sign in</h2>\n			   			<input type=\"text\" name=\"username\" class=\"input-block-level\" placeholder=\"Username\">\n			   			<input type=\"password\" name=\"password\" class=\"input-block-level\" placeholder=\"Password\">\n			  			<button class=\"btn btn-large btn-primary\" type=\"button\">Sign in</button>\n				 	</form>\n			    </div>\n			    <div class=\"tab-pane\" id=\"register\"> \n					<form name=\"registerForm\" >\n			   			<h2 class=\"form-signin-heading\">Register</h2>\n			   			<input type=\"text\" name=\"username\" id=\"userName\" class=\"input-block-level\" placeholder=\"Username\">\n			    		<input type=\"password\" name=\"password\" class=\"input-block-level\" placeholder=\"Password\">\n			   			<button class=\"btn btn-large btn-primary\" type=\"button\">register</button>\n			  		</form>\n			    </div>\n		    </div>\n	  	</div>\n	</div>";}
);

// template --- tmpl-MainView ---
Handlebars.templates['tmpl-MainView'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"container\">\n		The Main View Page.\n	</div>";}
);

// template --- tmpl-NavView ---
Handlebars.templates['tmpl-NavView'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<div class=\"navbar navview\">\n	  <div class=\"navbar-inner\">\n	    <div class=\"container\">\n	      <div class=\"appname\">Task Manager</div>\n	      <div class=\"signout close\">Sign out</div>\n	    </div>\n	  </div>\n	</div>";}
);

// template --- tmpl-ProjectView ---
Handlebars.templates['tmpl-ProjectView'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			<tr data-project-id=\"";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\" data-project-name=\"";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\">\n				<td>\n					<div class=\"projectName\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n					<div class=\"btns\">\n						<span class=\"close icon-pencil editBtn\"></span> \n						<button class=\"close showTicketModal\" type=\"button\">+</button>\n						<button class=\"close deleteBtn\" type=\"button\">&times;</button>\n					</div>\n					<div class=\"tickets\"></div>\n				</td>\n			</tr>\n			";
  return buffer;}

  buffer += "<div class=\"container projectView\"> \n		<h3 class=\"header\">Projects</h3>\n		<table class=\"table table-striped projectTable\">\n			";
  stack1 = depth0.projectList;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			<tr>\n				<td>\n					<input type=\"text\" name=\"projectName\" class=\"addProject\" placeholder=\"Enter a Project Name\"/>\n					<button class=\"btn btn-mini addBtn\" type=\"button\">Add Project</button>\n			   </td>\n			</tr>\n		</table>\n	</div>";
  return buffer;}
);

// template --- tmpl-TicketView ---
Handlebars.templates['tmpl-TicketView'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, foundHelper;
  buffer += "\n			<tr data-ticket-id=";
  foundHelper = helpers.id;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + " data-project-id=";
  foundHelper = helpers.projectId;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.projectId; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + ">\n				<td>\n					<div class=\"ticketName\">";
  foundHelper = helpers.name;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n					<div class=\"ticketDate\">--";
  foundHelper = helpers.date;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n					<div class=\"ticketContent\">";
  foundHelper = helpers.content;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</div>\n					<div class=\"btns\">\n						<button class=\"close deleteTicketBtn\" type=\"button\">&times;</button>\n					  <span class=\"close icon-pencil editTicketBtn\"></span> \n					</div>\n			  </td>\n			</tr>\n		";
  return buffer;}

  buffer += "<div class=\"container-fluid ticketView\">\n	  <table class=\"table ticketTable\"> \n		";
  stack1 = depth0.ticketList;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</table>\n	</div>";
  return buffer;}
);

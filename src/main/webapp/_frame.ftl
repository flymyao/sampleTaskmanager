<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Task Manager</title>
    <link rel="stylesheet" type="text/css" href="${_r.contextPath}/bootstrap/css/bootstrap.css">
<<<<<<< HEAD
    [@webBundle path="/js/" type="js"/]
    [@webBundle path="/css/" type="css"/]
    <script>
=======
		[@webBundle path="/js/" type="js"/]
    [@webBundle path="/css/" type="css"/]
		<script>
>>>>>>> add nav bar and sign out
    	var contextPath = "${_r.contextPath}";
    </script>
  </head>

  <body>
  	 <div id="navview"></div>
  	 <div id="mainview"></div>
   
  	 [#if _r.user??]
  	 <script type="text/javascript">
			 var $mainview = $("body").find("#mainview");
			 var $navview  = $("body").find("#navview");
		 	 var projectDao = brite.dao("Project");
		 	 $(document).ready(function(){
		 	   brite.display("NavView",$navview);
				 projectDao.daoList().pipe(function(projectList){
					 brite.display("ProjectView",$("body").find("#mainview"),{projectList:projectList});
				 });
			 });
  	 </script>
  	 [#else]
     <script type="text/javascript">
<<<<<<< HEAD
	 var $mainview = $("body").find("#mainview");
	 $(document).ready(function(){
              brite.display("LoginView",$mainview);
 	 });
     </script>
=======
	     var $mainview = $("body").find("#mainview");
		   $(document).ready(function(){
		     brite.display("LoginView",$mainview);
	 	   });
	 </script>
	 [/#if]
>>>>>>> add nav bar and sign out
  </body>
</html>

<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>Task Manager</title>
    <link rel="stylesheet" type="text/css" href="${_r.contextPath}/bootstrap/css/bootstrap.css">
    [@webBundle path="/js/" type="js"/]
    [@webBundle path="/css/" type="css"/]
    <script>
    	var contextPath = "${_r.contextPath}";
    </script>
  </head>

  <body>
    <div id="navview"></div>
      <div class="container">
        <div class="row-fluid">
          <div class="span3">
            <div id="projectnav"></div>
          </div>
         <div class="span9">
           <div id="mainview"></div>
        </div>
     </div>
   </div>
   [#if _r.user??]
   <script type="text/javascript">
      var $mainview = $("body").find("#mainview");
      var $navview  = $("body").find("#navview");
      var projectDao = brite.dao("Project");
      var ticketDao = brite.dao("Ticket");
      $(document).ready(function(){
	  brite.display("NavView",$navview);
	  projectDao.daoList().pipe(function(projectList){
	    brite.display("ProjectView",$("body").find("#projectnav"),{projectList:projectList});
	    if(projectList[0]){
	       ticketDao.daoList({"projectId":projectList[0].id}).pipe(function(ticketList){
		  brite.display("TicketView",$mainview,{ticketList:ticketList});
	       });
	    }
          });
      });
   </script>
   [#else]
   <script type="text/javascript">
      var $mainview = $("body").find("#mainview");
      var $mainview = $("body").find("#mainview");
      $(document).ready(function(){
          brite.display("LoginView",$mainview);
      });
  </script>
  [/#if]
  </body>
</html>

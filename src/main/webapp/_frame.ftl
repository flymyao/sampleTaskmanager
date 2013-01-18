<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Task Manager</title>
    
    <link rel="stylesheet" type="text/css" href="${_r.contextPath}/bootstrap/css/bootstrap.css">
    
    <script type="text/javascript" src="${_r.contextPath}/js/jquery.min.js"></script>
     <script type="text/javascript" src="${_r.contextPath}/bootstrap/js/bootstrap.js"></script>
    <script type="text/javascript" src="${_r.contextPath}/js/brite-snapshot.js"></script>
     <script type="text/javascript" src="${_r.contextPath}/js/handlebars-1.0.rc.1.js"></script>
      <script type="text/javascript" src="${_r.contextPath}/js/brite.Dao.RemoteDaoHandler.js"></script>
     <script>
     var contextPath = "${_r.contextPath}";
     
     </script>
    [@webBundle path="/js/" type="js" /]
	[@webBundle path="/css/" type="css" /]
  </head>

  <body>
    
     <div id = "mainview" ></div>
		<script type="text/javascript">
			brite.registerDao(new brite.UserDao("User"));
			var $mainview = $("body").find("#mainview");
			$(document).ready(function(){
				brite.display("LoginView",$mainview);
			});
		</script>
		
    
  </body>
</html>
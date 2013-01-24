<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Task Manager</title>
    <link rel="stylesheet" type="text/css" href="${_r.contextPath}/bootstrap/css/bootstrap.css">
    [@webBundle path="/js/" type="js" /]
	[@webBundle path="/css/" type="css" /]
	<script>
    	var contextPath = "${_r.contextPath}";
    </script>
  </head>

  <body>
     <div id="mainview"></div>
     <script type="text/javascript">
		 var $mainview = $("body").find("#mainview");
		 $(document).ready(function(){
		 brite.display("LoginView",$mainview);
	 	 });
	 </script>
  </body>
</html>
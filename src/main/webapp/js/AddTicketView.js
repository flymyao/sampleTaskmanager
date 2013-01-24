(function(){
	brite.viewDefaultConfig.loadTmpl = true;
	
	brite.registerView("AddTicketView",{emptyParent:false},{
		create:function(data,config){
			return render("tmpl-AddTicketView",{project:data.project});
		},
		events:{
			"click; .close":function(event){
				this.$el.remove();
			},
			"click; .addTicketBtn":function(event){
				var modal = this;
				var ticketDao = brite.dao("Ticket");
				var projectId =$(event.target).parent().attr("data-project-id");
				  ticketDao.daoSave({
					  name:$(event.target).prev().val(),
					  "project.id":projectId
				  }).pipe(function(){
					  var ticketDao = brite.dao("Ticket");
					  var $TicketView = $("[data-project-id='"+projectId+"'] .tickets");
					  ticketDao.getTickets(projectId).pipe(function(ticketList){
						  brite.display("TicketView",$TicketView,{ticketList:ticketList});
						  modal.$el.remove();
					  });
				    });
			}
		}
	})
})();
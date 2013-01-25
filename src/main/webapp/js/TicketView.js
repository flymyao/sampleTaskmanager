(function(){
	brite.registerView("TicketView",{emptyParent:true},{
		create:function(data,config){
			return render("tmpl-TicketView",{ticketList:data.ticketList});
		},
		events:{
			"click;.deleteTicketBtn":function(event){
				var ticketDao = brite.dao("Ticket");
				ticketDao.daoDelete($(event.target).closest("tr").attr("data-ticket-id")).pipe(function(){
					ticketDao.daoList({projectId:$(event.target).closest("tr").attr("data-project-id")}).pipe(function(ticketList){
						  brite.display("TicketView",$mainview,{ticketList:ticketList});
					  });
				});
			}
		}
	})
})();
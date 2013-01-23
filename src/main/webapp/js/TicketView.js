(function(){
	brite.registerView("TicketView",{emptyParent:true},{
		create:function(data,config){
			return render("tmpl-TicketView",{ticketList:data.ticketList});
		}
	})
})();
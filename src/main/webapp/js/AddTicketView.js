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
				  name:$(event.target).prev().prev().val(),
				  content:$(event.target).prev().val(),
				  projectId:projectId
			    }).pipe(function(){
				  ticketDao.daoList({"projectId":$(event.target).closest("tr").attr("data-project-id")}).pipe(function(ticketList){
					  brite.display("TicketView",$mainview,{ticketList:ticketList});
				  });
			    });
			}
		}
	})
})();
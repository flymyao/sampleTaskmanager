package com.example.sampletaskmanager.web;

import java.util.List;

import com.britesnow.snow.web.param.annotation.WebParam;
import com.britesnow.snow.web.rest.annotation.WebGet;
import com.example.sampletaskmanager.dao.ProjectDao;
import com.example.sampletaskmanager.entity.Ticket;
import com.google.inject.Inject;
import com.google.inject.Singleton;

@Singleton
public class ProjectWebHandler {

	@Inject
	private ProjectDao projectDao;
	@WebGet("/getTickets")
	public List<Ticket> getTickets(@WebParam("projectId")Long id){
		return projectDao.getTickets(id);
	}
	
}

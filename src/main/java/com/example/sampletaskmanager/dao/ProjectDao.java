package com.example.sampletaskmanager.dao;

import java.util.List;

import com.example.sampletaskmanager.entity.Project;
import com.example.sampletaskmanager.entity.Ticket;
import com.google.inject.Singleton;

@Singleton
public class ProjectDao extends BaseDao<Project>{

	public List<Ticket> getTickets(Long id){
		return get(id).getTickets();
	}
	
}

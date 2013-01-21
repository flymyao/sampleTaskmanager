package com.example.sampletaskmanager.dao;

import java.util.List;

public interface IDao<T> {

	public void save(T t);
	
	public T get(Long id);
	
	public void delete(T t);
	
	public List<T> list();
	
	public Class<T> getEntityClass();
}

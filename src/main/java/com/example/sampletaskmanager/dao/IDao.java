package com.example.sampletaskmanager.dao;

import java.util.List;

public interface IDao<T> {

	public T save(T t);
	
	public T get(Long id);
	
	public void delete(T t);
	
	public List<T> list(String param);
	
	public Class<T> getEntityClass();
	
	public T update(T t);
}

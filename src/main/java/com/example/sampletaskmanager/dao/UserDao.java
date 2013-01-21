package com.example.sampletaskmanager.dao;

import com.example.sampletaskmanager.entity.User;
import com.google.inject.Singleton;

@Singleton
public class UserDao extends BaseDao<User> {

	public User getUser(String userName){
		return (User) daohelper.findFirst("from User where username=?",userName);
	}
	public User getUser(String userName,String password){
		return (User) daohelper.findFirst("from User where username=? and password=?",userName,password);
	}
	
	
	
}

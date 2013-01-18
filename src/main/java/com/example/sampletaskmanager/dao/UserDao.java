package com.example.sampletaskmanager.dao;

import java.util.List;

import com.britesnow.snow.web.db.hibernate.HibernateDaoHelper;
import com.example.sampletaskmanager.entity.User;
import com.google.inject.Inject;
import com.google.inject.Singleton;

@Singleton
public class UserDao {
	@Inject
    HibernateDaoHelper daohelper;
	
	public User getUser(String userName){
		return (User) daohelper.findFirst("from User where username=?",userName);
	}
	public User getUser(String userName,String password){
		return (User) daohelper.findFirst("from User where username=? and password=?",userName,password);
	}
	
	public void addUser(User user){
		daohelper.save(user);
	}
	
	@SuppressWarnings("unchecked")
	public List<User> getUsers(){
		return daohelper.getSession().createQuery("from User").list();
	}
}

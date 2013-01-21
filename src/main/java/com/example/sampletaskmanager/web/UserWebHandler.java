package com.example.sampletaskmanager.web;

import com.britesnow.snow.web.RequestContext;
import com.britesnow.snow.web.handler.annotation.WebActionHandler;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.example.sampletaskmanager.dao.UserDao;
import com.example.sampletaskmanager.entity.User;
import com.google.inject.Inject;
import com.google.inject.Singleton;

@Singleton
public class UserWebHandler {

	@Inject
	private UserDao userDao;
	@WebActionHandler(name="register")
	public WebStatus addUser(@WebParam("username")String userName,@WebParam("password")String  password, RequestContext rc){
		if(userDao.getUser(userName)!=null)
			return WebStatus.getWebStatus(false);
		
		User user = new User();
		user.setUserName(userName);
		user.setPassword(password);
		userDao.save(user);
		return WebStatus.getWebStatus(true);
	}
	
	
	@WebActionHandler(name="login")
	public WebStatus loginIn(@WebParam("username")String userName,@WebParam("password")String  password, RequestContext rc){
		User user = userDao.getUser(userName,password);
		if(user!=null){
		rc.getReq().getSession().setAttribute("user", user);
		return WebStatus.getWebStatus(true);
		}
		else
			return WebStatus.getWebStatus(false);
	}
}

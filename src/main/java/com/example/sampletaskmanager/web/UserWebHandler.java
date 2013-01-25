package com.example.sampletaskmanager.web;

import com.britesnow.snow.web.RequestContext;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.britesnow.snow.web.rest.annotation.WebGet;
import com.britesnow.snow.web.rest.annotation.WebPost;
import com.example.sampletaskmanager.dao.UserDao;
import com.example.sampletaskmanager.entity.User;
import com.google.inject.Inject;
import com.google.inject.Singleton;

@Singleton
public class UserWebHandler {

	@Inject
	private UserDao userDao;
	
	@WebPost("/register")
	public WebStatus addUser(@WebParam("username")String userName,@WebParam("password")String  password, RequestContext rc){
		if(userDao.getUser(userName)!=null)
			return WebStatus.getWebStatus(false);
		User user = new User();
		user.setUserName(userName);
		user.setPassword(password);
		userDao.save(user);
		rc.getReq().getSession().setAttribute("user", user);
		return WebStatus.getWebStatus(true);
	}
	
	
	@WebPost("/signIn")
	public WebStatus signIn(@WebParam("username")String userName,@WebParam("password")String  password, RequestContext rc){
		User user = userDao.getUser(userName,password);
		if(user!=null){
		rc.getReq().getSession().setAttribute("user", user);
		return WebStatus.getWebStatus(true);
		}
		else
			return WebStatus.getWebStatus(false);
	}
	
	@WebGet("/signOut")
	public WebStatus signOut(RequestContext rc){
		rc.getReq().getSession().removeAttribute("user");
		return WebStatus.getWebStatus(true);
	}
}

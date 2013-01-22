package com.example.sampletaskmanager.web;

import com.britesnow.snow.web.RequestContext;
import com.britesnow.snow.web.auth.AuthRequest;
import com.britesnow.snow.web.auth.AuthToken;
import com.example.sampletaskmanager.entity.User;

public class AppAuthRequest implements AuthRequest<User>{

	@Override
	public AuthToken<User> authRequest(RequestContext rc) {
	  User user = (User) rc.getReq().getSession().getAttribute("user");
        if (user != null){
            AuthToken<User> authToken = new AuthToken<User>();
            authToken.setUser(user);
            return authToken;
        }else{
            return null;
        }
	}
}
 
package com.example.sampletaskmanager.web;

import java.util.List;
import java.util.Map;

import com.britesnow.snow.util.JsonUtil;
import com.britesnow.snow.util.ObjectUtil;
import com.britesnow.snow.web.handler.annotation.WebActionHandler;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.example.sampletaskmanager.dao.DaoRegistry;
import com.example.sampletaskmanager.dao.IDao;
import com.google.inject.Inject;
import com.google.inject.Singleton;

@Singleton
@SuppressWarnings({"unchecked","rawtypes"})
public class DaoWebHandler {

	@Inject
	public DaoRegistry daoRegistry;
	
	@WebActionHandler(name="daoGet")
	public Object daoGet(@WebParam("entityType") String entityType,@WebParam("id")Long id){
		return daoRegistry.getDao(entityType).get(id);
	}
	
	@WebActionHandler(name="daoDelete")
	public WebStatus daoDelete(@WebParam("entityType") String entityType,@WebParam("id")Long id){
		IDao dao = daoRegistry.getDao(entityType);
		dao.delete(dao.get(id));
		return WebStatus.getWebStatus(true);
	}
	
	@WebActionHandler(name="daoSave")
	public void daoSave(@WebParam("entityType") String entityType,  @WebParam("jsonObj") String jsonObj){
		IDao dao = daoRegistry.getDao(entityType);
		Map jsonMap = JsonUtil.toMapAndList(jsonObj);
		Object o = daoRegistry.getEntityInstance(entityType);
		ObjectUtil.populate(o, jsonMap);
		dao.save(o);
	}
	
	@WebActionHandler(name="daoList")
	public List<?> daoList(@WebParam("entityType") String entityType){
		IDao dao = daoRegistry.getDao(entityType);
		return dao.list();
	}
	
}

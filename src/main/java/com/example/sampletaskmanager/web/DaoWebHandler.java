package com.example.sampletaskmanager.web;

import java.util.List;
import java.util.Map;

import com.britesnow.snow.util.JsonUtil;
import com.britesnow.snow.util.ObjectUtil;
import com.britesnow.snow.web.param.annotation.WebParam;
import com.britesnow.snow.web.rest.annotation.WebGet;
import com.britesnow.snow.web.rest.annotation.WebPost;
import com.example.sampletaskmanager.dao.DaoRegistry;
import com.example.sampletaskmanager.dao.IDao;
import com.google.inject.Inject;
import com.google.inject.Singleton;

@Singleton
@SuppressWarnings({"unchecked","rawtypes"})
public class DaoWebHandler {

	@Inject
	public DaoRegistry daoRegistry;
	
	@WebGet("/daoGet")
	public Object daoGet(@WebParam("entityType") String entityType,@WebParam("id")Long id){
		return daoRegistry.getDao(entityType).get(id);
	}
	
	@WebPost("/daoDelete")
	public WebStatus daoDelete(@WebParam("entityType") String entityType,@WebParam("id")Long id){
		IDao dao = daoRegistry.getDao(entityType);
		dao.delete(dao.get(id));
		return WebStatus.getWebStatus(true);
	}
	
	@WebPost("/daoSave")
	public Object daoSave(@WebParam("entityType") String entityType,  @WebParam("jsonObj") String jsonObj){
		IDao dao = daoRegistry.getDao(entityType);
		Map jsonMap = JsonUtil.toMapAndList(jsonObj);
		Object o = daoRegistry.getEntityInstance(entityType);
		ObjectUtil.populate(o, jsonMap);
		return dao.save(o);
	}
	
	@WebGet("/daoList")
	public List<?> daoList(@WebParam("entityType") String entityType,@WebParam("jsonParam") String jsonParam){
		IDao dao = daoRegistry.getDao(entityType);
		StringBuffer bf = new StringBuffer("");
		if(jsonParam!=null){
			Map jsonMap = JsonUtil.toMapAndList(jsonParam);
			for(Object key:jsonMap.keySet()){
				bf.append(key.toString()).append("=").append(jsonMap.get(key).toString()).append(" and ");
			}
		}
		return dao.list(bf.toString());
	}
	
	@WebPost("/daoUpdate")
	public Object daoUpdate(@WebParam("entityType") String entityType,  @WebParam("jsonObj") String jsonObj){
		IDao dao = daoRegistry.getDao(entityType);
		Map jsonMap = JsonUtil.toMapAndList(jsonObj);
		Object o = daoRegistry.getEntityInstance(entityType);
		ObjectUtil.populate(o, jsonMap);
		return dao.update(o);
	}
}

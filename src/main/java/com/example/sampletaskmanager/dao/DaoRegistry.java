package com.example.sampletaskmanager.dao;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import com.google.inject.Injector;
import com.metapossum.utils.scanner.reflect.ClassesInPackageScanner;

@SuppressWarnings({ "unchecked", "rawtypes" })
public class DaoRegistry {

	private Map<String, IDao> daoByName = new HashMap<String, IDao>();
	private Map<String, Class> entityClassByName = new HashMap<String, Class>();

	public void init(Injector injector, Class[] entityClasses) {
		try {
			for (Class clazz : entityClasses) {
				entityClassByName.put(clazz.getSimpleName(), clazz);
			}
			Set<Class<? extends BaseDao>> daoClasses = new ClassesInPackageScanner().findSubclasses("com.example.sampletaskmanager.dao",
							BaseDao.class);
			for (Class clazz : daoClasses) {
				if(clazz==BaseDao.class){
					continue;
				}
				System.out.println(clazz);
				IDao dao = (IDao) injector.getInstance(clazz);
				daoByName.put(dao.getEntityClass().getSimpleName(), dao);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public IDao<?> getDao(String type) {
		return daoByName.get(type);
	}
	
	public  Object getEntityInstance(String type){
		try {
			return entityClassByName.get(type).newInstance();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}
		return null;
	}

}

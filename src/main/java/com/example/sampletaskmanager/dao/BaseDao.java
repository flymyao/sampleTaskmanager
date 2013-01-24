package com.example.sampletaskmanager.dao;

import java.lang.reflect.Type;
import java.util.List;

import com.britesnow.snow.web.db.hibernate.HibernateDaoHelper;
import com.google.inject.Inject;
import com.googlecode.gentyref.GenericTypeReflector;

/**
 * @author Yao general daoGet, daoDelete,daoList,daoSave methods
 */
public class BaseDao<T> implements IDao<T> {

	@Inject
	HibernateDaoHelper daohelper;

	private Class<T> entityClass;

	@SuppressWarnings("unchecked")
	public BaseDao() {
		Type persistentType = GenericTypeReflector.getTypeParameter(getClass(),
				BaseDao.class.getTypeParameters()[0]);
		if (persistentType instanceof Class)
			entityClass = (Class<T>) persistentType;
		else
			throw new IllegalStateException("can't get the type of the generic class");
	}

	@Override
	public T save(T t) {
		return daohelper.save(t);
	}

	@Override
	public T get(Long id) {
		return daohelper.get(entityClass, id);
	}

	@Override
	public void delete(T t) {
		daohelper.delete(t);
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<T> list(String param) {
		return (List<T>) daohelper.find(0, 100, "from "+entityClass.getSimpleName()+" where "+param+" 1= 1");
	}

	@Override
	public Class<T> getEntityClass() {
		return entityClass;
	}

	@Override
	public T update(T t) {
		return daohelper.update(t);
	}
}

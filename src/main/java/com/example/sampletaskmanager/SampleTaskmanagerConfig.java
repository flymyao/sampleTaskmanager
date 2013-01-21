package com.example.sampletaskmanager;

import java.io.IOException;
import java.util.Set;

import com.britesnow.snow.web.binding.EntityClasses;
import com.example.sampletaskmanager.dao.DaoRegistry;
import com.example.sampletaskmanager.entity.User;
import com.google.inject.AbstractModule;
import com.google.inject.Inject;
import com.google.inject.Injector;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import com.metapossum.utils.scanner.reflect.ClassesInPackageScanner;

public class SampleTaskmanagerConfig extends AbstractModule{

	@Override
	protected void configure() {
		 
	 
		
	}

	  	@Provides
	    @Singleton
	    @EntityClasses
	    public Class[] provideEntityClasses() {
	        Set<Class<?>> entitySet;
	        try {
	            entitySet = new ClassesInPackageScanner().findAnnotatedClasses(User.class.getPackage().getName(), javax.persistence.Entity.class);
	            Class[] entityClasses = new Class[entitySet.size()];
	            entitySet.toArray(entityClasses);
	            return entityClasses;
	        } catch (IOException e) {
	            throw new RuntimeException("Cannot get all the enity class: " + e.getMessage());
	        }

	    } 
	  	
	  	@Provides
	    @Singleton
	    @Inject
	    public DaoRegistry provideDaoRegistry(Injector injector, @EntityClasses Class[] entityClasses) {
	  		 DaoRegistry daoRegistry = new DaoRegistry();
	         daoRegistry.init(injector, entityClasses);
	         return daoRegistry;
	    } 
	  	
}

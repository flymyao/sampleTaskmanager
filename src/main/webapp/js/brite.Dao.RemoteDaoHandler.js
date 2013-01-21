(function($) {
	function RemoteDao(entityType) {
        this._entityType = entityType;
	}
	
	RemoteDao.prototype.entityType = function () {
	        return this._entityType;
	    };
	    
	    RemoteDao.prototype.login = function(username,password){
		return $.ajax({
			type:"post",
			dataType:'json',
			url:contextPath+"/login.do",
			data:{
				username:username,
				password:password
			}
		}).pipe(function(v){
			return v;
		});
		
	};
	
	RemoteDao.prototype.register = function(username,password){
		return $.ajax({
			type:"post",
			dataType:'json',
			url:contextPath+"/register.do",
			data:{
				
				jsonObj:'{username:"'+username+'",password:"'+password+'"}',
				entityType:this._entityType
			}
		}).pipe(function(v){
			return v;
		});
	};

	RemoteDao.prototype.daoSave = function(data){
		return $.ajax({
			type:"post",
			dataType:'json',
			url:contextPath+"/daoSave.do",
			data:{
				jsonObj:JSON.stringify(data),
				entityType:this._entityType
			}
		}).pipe(function(v){
			return v;
		});
	};
	
	RemoteDao.prototype.daoDelete = function(id){
		return $.ajax({
			type:"post",
			dataType:'json',
			url:contextPath+"/daoDelete.do",
			data:{
				id:id,
				jsonObj:JSON.stringify(data),
				entityType:this._entityType
			}
		}).pipe(function(v){
			return v;
		});
	};
	
	RemoteDao.prototype.daoGet = function(id){
		return $.ajax({
			type:"post",
			dataType:'json',
			url:contextPath+"/daoGet.do",
			data:{
				id:id,
				jsonObj:JSON.stringify(data),
				entityType:this._entityType
			}
		}).pipe(function(v){
			return v;
		});
	};
	
	RemoteDao.prototype.daoList = function(){
		return $.ajax({
			type:"post",
			dataType:'json',
			url:contextPath+"/daoList.do",
			data:{
				entityType:this._entityType
			}
		}).pipe(function(v){
			return v;
		});
	};
	brite.RemoteDao = RemoteDao;

})(jQuery);

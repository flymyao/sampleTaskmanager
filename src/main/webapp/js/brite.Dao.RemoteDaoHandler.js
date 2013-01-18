(function($) {
	function UserDao(entityType) {
        this._entityType = entityType;
	}
	
	UserDao.prototype.entityType = function () {
	        return this._entityType;
	    };
	    
	    UserDao.prototype.login = function(username,password){
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
	
	UserDao.prototype.addUser = function(username,password){
		return $.ajax({
			type:"post",
			dataType:'json',
			url:contextPath+"/addUser.do",
			data:{
				username:username,
				password:password
			}
		}).pipe(function(v){
			return v;
		});
	};

	brite.UserDao = UserDao;

})(jQuery);

(function($) {
	function RemoteDao(entityType) {
		this._entityType = entityType;
	};

	RemoteDao.prototype.entityType = function() {
		return this._entityType;
	};

	RemoteDao.prototype.signIn = function(username, password) {
		return $.ajax({
			type : "post",
			dataType : 'json',
			url : contextPath + "/signIn",
			data : {
				username : username,
				password : password
			}
		}).pipe(function(v) {
			return v;
		});
	};

	RemoteDao.prototype.signOut = function() {
		return $.ajax({
			type : "get",
			dataType : 'json',
			url : contextPath + "/signOut"
		}).pipe(function(v) {
			return v;
		});
	};
	
	RemoteDao.prototype.getTickets=function(projectId){
		return $.ajax({
			type : "get",
			dataType : 'json',
			url : contextPath + "/getTickets",
			data : {
				projectId:projectId
			}
		}).pipe(function(v) {
			return v;
		});
	};
	
	RemoteDao.prototype.register = function(username, password) {
		return $.ajax({
			type : "post",
			dataType : 'json',
			url : contextPath + "/register",
			data : {
				username : username,
				password : password
			}
		}).pipe(function(v) {
			return v;
		});
	};

	RemoteDao.prototype.daoSave = function(data) {
		return $.ajax({
			type : "post",
			dataType : 'json',
			url : contextPath + "/daoSave",
			data : {
				jsonObj : JSON.stringify(data),
				entityType : this._entityType
			}
		}).pipe(function(v) {
			return v;
		});
	};

	RemoteDao.prototype.daoDelete = function(id) {
		return $.ajax({
			type : "post",
			dataType : 'json',
			url : contextPath + "/daoDelete",
			data : {
				id : id,
				entityType : this._entityType
			}
		}).pipe(function(v) {
			return v;
		});
	};

	RemoteDao.prototype.daoGet = function(id) {
		return $.ajax({
			type : "get",
			dataType : 'json',
			url : contextPath + "/daoGet",
			data : {
				id : id,
				entityType : this._entityType
			}
		}).pipe(function(v) {
			return v;
		});
	};

	RemoteDao.prototype.daoList = function(data) {
		return $.ajax({
			type : "get",
			dataType : 'json',
			url : contextPath + "/daoList",
			data : {
				entityType : this._entityType,
				jsonParam  : JSON.stringify(data)
			}
		}).pipe(function(v) {
			return v;
		});
	};
	
	RemoteDao.prototype.daoUpdate = function(data) {
		return $.ajax({
			type : "post",
			dataType : 'json',
			url : contextPath + "/daoUpdate",
			data : {
				entityType : this._entityType,
				jsonObj  : JSON.stringify(data)
			}
		}).pipe(function(v) {
			return v;
		});
	};
	brite.RemoteDao = RemoteDao;

})(jQuery);

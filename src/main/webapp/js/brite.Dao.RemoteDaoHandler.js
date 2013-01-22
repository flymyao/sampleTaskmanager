(function($) {
	function RemoteDao(entityType) {
		this._entityType = entityType;
	};

	RemoteDao.prototype.entityType = function() {
		return this._entityType;
	};

	RemoteDao.prototype.login = function(username, password) {
		return $.ajax({
			type : "post",
			dataType : 'json',
			url : contextPath + "/login",
			data : {
				username : username,
				password : password
			}
		}).pipe(function(v) {
			return v;
		});

	};

	RemoteDao.prototype.register = function(username, password) {
		return $.ajax(
				{
					type : "post",
					dataType : 'json',
					url : contextPath + "/register",
					data : {

						jsonObj : '{username:"' + username + '",password:"'
								+ password + '"}',
						entityType : this._entityType
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
				jsonObj : JSON.stringify(data),
				entityType : this._entityType
			}
		}).pipe(function(v) {
			return v;
		});
	};

	RemoteDao.prototype.daoGet = function(id) {
		return $.ajax({
			type : "post",
			dataType : 'json',
			url : contextPath + "/daoGet",
			data : {
				id : id,
				jsonObj : JSON.stringify(data),
				entityType : this._entityType
			}
		}).pipe(function(v) {
			return v;
		});
	};

	RemoteDao.prototype.daoList = function() {
		return $.ajax({
			type : "post",
			dataType : 'json',
			url : contextPath + "/daoList",
			data : {
				entityType : this._entityType
			}
		}).pipe(function(v) {
			return v;
		});
	};
	brite.RemoteDao = RemoteDao;

})(jQuery);

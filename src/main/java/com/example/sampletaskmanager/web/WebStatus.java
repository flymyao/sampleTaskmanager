package com.example.sampletaskmanager.web;

public class WebStatus {

	private boolean success;

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	public static WebStatus getWebStatus(boolean success){
		WebStatus status = new WebStatus();
		status.setSuccess(success);
		return status;
	}
	
}

package com.crud.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Task {
	
	@Id
	private String id;
	private String name;
	private String assignTo;
	
	public Task() {
		
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAssignTo() {
		return assignTo;
	}
	public void setAssignTo(String assignTo) {
		this.assignTo = assignTo;
	}
	

}

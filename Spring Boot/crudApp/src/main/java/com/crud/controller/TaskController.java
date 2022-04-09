package com.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crud.entity.Task;
import com.crud.servcie.TaskServcie;

@RestController
@CrossOrigin
public class TaskController {
	@Autowired
	TaskServcie taskServcie;
	
	// localhost:8800/todo/task
	
	@GetMapping("/task")
	public List getAllTask() {
		return taskServcie.getAllTask();
	}
	
	//localhost:8800/todo/task/add 
	
	@PostMapping(value="/add/", consumes="application/json")
    public void addNewTask(@RequestBody Task task) {
		taskServcie.addTask(task);
	}	
	@PutMapping(value="update/{id}", consumes="application/json")
	public void updateTask(@PathVariable String id, @RequestBody Task task) {
		taskServcie.updateTask(task);
	}	
	
	@DeleteMapping(value="/delete/{id}")
	public void deleteTask(@PathVariable String id) {
		taskServcie.deleteTask(id);	
	}
    	
	
}

package com.crud.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import com.crud.entity.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, String> {

}

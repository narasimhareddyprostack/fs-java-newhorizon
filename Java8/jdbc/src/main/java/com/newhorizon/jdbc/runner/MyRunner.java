package com.newhorizon.jdbc.runner;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.newhorizon.jdbc.dao.impl.DaoImpl;

@Component
public class MyRunner implements CommandLineRunner {

@Autowired
DaoImpl di;	

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Test Case 123");
	    di.insertRecords();
	    
	    List l = di.selectRecords();
		l.forEach(map->System.out.println(map));	

	}

}

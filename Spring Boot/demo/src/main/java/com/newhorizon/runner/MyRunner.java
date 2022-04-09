package com.newhorizon.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.newhorizon.beans.HelloBean;

@Component
public class MyRunner implements CommandLineRunner {

@Autowired
HelloBean helloBean;

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		helloBean.sayHello();

	}

}

package com.newhorizon.beans;

import org.springframework.stereotype.Component;

@Component
public class HelloBean {
	public void sayHello() {
		System.out.println("Hello, Welcome Spring Boot World");
	}

}

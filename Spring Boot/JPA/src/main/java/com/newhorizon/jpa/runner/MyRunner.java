package com.newhorizon.jpa.runner;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.newhorizon.jpa.entity.Passenger;
import com.newhorizon.jpa.repository.PassengerRepository;

@Component
public class MyRunner implements CommandLineRunner {
	
	@Autowired
	PassengerRepository passengerRepo;
	
	@Override
	public void run(String... args) throws Exception {
		Passenger p = new Passenger();
		p.setPassengerId(103);
		p.setFirstName("sonia");
		p.setLastName("Gandhi");
		p.setEmailId("sonia@gmail.com");
		passengerRepo.save(p);
		
		List data = passengerRepo.findAll();
		for( Object value :data) {
			System.out.println(value);
		}
		
	}

}

package com.newhorizon.jpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.newhorizon.jpa.entity.Passenger;

@Repository
public interface PassengerRepository  extends JpaRepository<Passenger, Integer>{

	

}

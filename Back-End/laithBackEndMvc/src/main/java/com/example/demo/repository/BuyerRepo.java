package com.example.demo.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Buyer;

public interface BuyerRepo extends JpaRepository<Buyer, Integer>{
	
	public List<Buyer> findAll();
	public Buyer findByUsername(String username);
	
}

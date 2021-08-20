package com.example.demo.buyer;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
//import com.example.demo.buyer.Buyer;
@Repository
public interface BuyerRepo extends JpaRepository<Buyer, Integer>{

	public List<Buyer> findAll();
	public Buyer findByUsername(String username);
	public Buyer findByID(int id);
	public Buyer createBuyer();
	public Buyer updateBuyerInfo();
}

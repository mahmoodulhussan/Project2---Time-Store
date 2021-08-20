package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Orders;

@Repository
public interface OrdersRepo extends JpaRepository<Orders, Integer>{
	
	public List<Orders> findAll();
	public Orders findByBuyerId();
}

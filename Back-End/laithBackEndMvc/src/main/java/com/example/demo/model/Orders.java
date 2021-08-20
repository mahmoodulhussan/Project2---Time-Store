package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.example.demo.model.Buyer;
//import com.revature.demo.watch.Watch;

@Entity
@Table(name = "orders")
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int orderId;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "buyer_FK", nullable = false)
	private Buyer ordersList;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "watch_FK", nullable = false)
	private Watch watch_orderholder;
	
	
	//private Watch watchOrder;
	
}
package com.revature.demo.watch;

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.revature.demo.orders.Orders;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name = "watch")
public class Watch {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int watchid;
	@Column(name="price", nullable=false)
	public int price;
	@Column(name="description", nullable = false)
	public String description;
	@Column(name="pic", nullable = false)
	public String picName;
	
	@OneToMany(mappedBy = "watch_order")
	@JsonIgnore
	private List<Orders> orderList = new ArrayList<Orders>();
	
	public int getWatchid() {
		return watchid;
	}
	
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getPicName() {
		return picName;
	}
	public void setPicName(String picName) {
		this.picName = picName;
	}

	public Watch() {
		super();
	}

	public Watch(int watchid, int price, String description, String picName) {
		super();
		this.watchid = watchid;
		this.price = price;
		this.description = description;
		this.picName = picName;
	}
	
	
	

}

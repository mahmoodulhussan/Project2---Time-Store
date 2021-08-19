package com.revature.demo.watch;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonIgnore;

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
	@Column(name="discription", nullable = false)
	public String discription;
	@Column(name="pic", nullable = false)
	public String picName;
	public int getWatchid() {
		return watchid;
	}
	
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDiscription() {
		return discription;
	}
	public void setDiscription(String discription) {
		this.discription = discription;
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

	public Watch(int watchid, int price, String discription, String picName) {
		super();
		this.watchid = watchid;
		this.price = price;
		this.discription = discription;
		this.picName = picName;
	}
	
	
	

}

package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table
public class Watch {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int watchid;
	@Column(nullable=false)
	private int price;
	@Column( nullable = false)
	private  String discription;
	@Column( nullable = false)
	private  String picName;
	
	@OneToMany(mappedBy="watchorderholder" )
	@JsonIgnore
	private List<Orders>ordersList = new ArrayList<Orders>();

	public Watch(int price, String discription, String picName, List<Orders> ordersList) {
		super();
		this.price = price;
		this.discription = discription;
		this.picName = picName;
		this.ordersList = ordersList;
	}

	public Watch(int price, String discription, String picName) {
		super();
		this.price = price;
		this.discription = discription;
		this.picName = picName;
	}
	

	
	
	

}

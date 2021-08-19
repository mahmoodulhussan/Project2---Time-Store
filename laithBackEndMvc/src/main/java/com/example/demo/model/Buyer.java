package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.revature.demo.orders.Orders;

import lombok.AllArgsConstructor;
//import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
//@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity

@Table
public class Buyer {
	
	@Id
	@Column(nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(nullable = false)
    private String first; // first name

    @Column(nullable = false)
    private String last; // last name

 
    @Column( nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String pass; // password

    @OneToMany(mappedBy = "orderholder", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Orders> ordersList = new ArrayList<Orders>();

    
	public Buyer(String first, String last, String email, String pass) {
		super();
		this.first = first;
		this.last = last;
		this.email = email;
		this.pass = pass;
	}


	public Buyer(String email, String pass) {
		super();
		this.email = email;
		this.pass = pass;
	}


	public Buyer(List<Orders> ordersList) {
		super();
		this.ordersList = ordersList;
	}



	
    
    
}


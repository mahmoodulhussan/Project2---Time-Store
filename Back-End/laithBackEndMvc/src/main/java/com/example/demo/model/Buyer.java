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
@Table(name = "buyer")

public class Buyer {
	
	@Id
	@Column(name = "buyer_id", nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "first_name", nullable = false)
    private String first; // first name

    @Column(name = "last_name", nullable = false)
    private String last; // last name

 
    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String pass; // password

    @OneToMany(mappedBy = "order_holder", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Orders> ordersList = new ArrayList<Orders>();

    
	public Buyer(String first, String last, String email, String pass) {
		super();
		this.first = first;
		this.last = last;
		this.email = email;
		this.pass = pass;
	}
	
	
    
    
}


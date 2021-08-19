package com.example.demo.buyer;

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
import com.revature.demo.orders.Orders;

//import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
//@EqualsAndHashCode
@NoArgsConstructor
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

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String pass; // password
    
    
    @OneToMany(mappedBy = "order_holder", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Orders> ordersList = new ArrayList<Orders>();
    
    // for registration
    public Buyer(String first, String last, String username, String email, String pass) {
		this.first = first;
		this.last = last;
		this.username = username;
		this.email = email;
		this.pass = pass;
	}
	
    // to get all info
	public Buyer(int id, String first, String last, String email, String username, String pass) {
		this.id = id;
		this.first = first;
		this.last = last;
		this.email = email;
		this.username = username;
		this.pass = pass;
	}
	
	// for buying ??
	public Buyer(String first, String last, String email, String pass) {
		this.first = first;
		this.last = last;
		this.email = email;
		this.pass = pass;
	}
	
	
	
}

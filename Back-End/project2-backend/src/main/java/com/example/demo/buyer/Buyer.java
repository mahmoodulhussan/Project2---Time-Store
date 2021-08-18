package com.example.demo.buyer;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
	@Column(name = "buyer_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@JoinColumn()
	
	
}

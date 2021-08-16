package com.example.demo.models;

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

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
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
	

}

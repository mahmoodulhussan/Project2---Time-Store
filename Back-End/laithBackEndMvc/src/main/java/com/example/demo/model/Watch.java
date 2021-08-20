package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
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
@Entity
@Table(name = "watch")
public class Watch {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Integer watchid;
	@Column(name="price", nullable=false)
	public int price;
	@Column(name="discription", nullable = false)
	public String discription;
	@Column(name="pic", nullable = false)
	public String picName;
	@OneToMany(mappedBy="watch_orderholder" )
	@JsonIgnore
	private List<Orders>ordersList = new ArrayList<Orders>();
	public int getWatchid() {
		return watchid;
	}
	

	
	
	

}

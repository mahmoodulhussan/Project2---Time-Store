package com.example.demo.service;

import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import com.example.demo.model.Buyer;
import com.example.demo.repository.BuyerRepo;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class BuyerService {
	
	private BuyerRepo uDao;
	
	public boolean registerUser(Buyer u) {
		try {
			uDao.save(u);
			return true;
		} catch(Exception e) {
			return false;
		}
	}
	
	public Buyer loginBuyer(String email, String password) {
		//findByUsername will return null if the user does not exist
		Buyer u = uDao.findByUsername(email);
		//If username does not exist return null
		if(u == null) {
			return null;
		}
		else {
			//If you user exists but password is wrong return null
			if(!u.getPass().equals(password)) {
				return null;
			}
			//Else return the logged in user
			else {
				return u;
			}
		}
	}
	
	public Buyer displayBuyer(String email) {
		Buyer u = uDao.findByUsername(email);
		if(u == null) {
			return null;
		}
		else {
			return u;
		}
	}
	
	public Buyer getUserById(int id) {
		return uDao.getById(id);
	}
	

	
}

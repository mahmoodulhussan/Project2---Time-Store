package com.example.services;

import com.example.demo.model.Buyer;
import com.example.repos.BuyerRepo;

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
	
	public Buyer loginUser(String email, String password) {
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
	
	public Buyer displayUser(String email) {
		Buyer u = uDao.findByUsername(email);
		if(u == null) {
			return null;
		}
		else {
			return u;
		}
	}
	//not needed as model doesnt take care of id
	/*
	public Buyer getUserById(int id) {
		return uDao.getById(id);
	}*/
	
	
}

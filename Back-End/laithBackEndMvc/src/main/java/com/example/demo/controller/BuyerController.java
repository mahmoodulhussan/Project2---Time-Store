package com.example.demo.controller;

import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;


import com.example.demo.model.Buyer;
import com.example.demo.repository.BuyerRepo;
import com.example.demo.service.BuyerService;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/users")
@AllArgsConstructor(onConstructor=@__(@Autowired))
@NoArgsConstructor
public class BuyerController {
	
	private BuyerService uServ;
	
	@InitBinder()
	protected void initBinder(WebDataBinder binder) {
		//binder.setValidator(new UserValidator());
	}
	
	@PostMapping("/register")
	public ResponseEntity<String> createUser(@RequestBody LinkedHashMap<String, String> buyer){
		System.out.println(buyer);
		Buyer u = new Buyer(buyer.get("first"), buyer.get("last"), buyer.get("email"), buyer.get("pass"));
		if(uServ.registerUser(u)) {
			return new ResponseEntity<>("Buyer was registered", HttpStatus.CREATED);
		}
		else {
			return new ResponseEntity<>("Username or email already registered to a Buyer", HttpStatus.CONFLICT);
		}
	}
	
	@PostMapping("/login")
	public ResponseEntity<Buyer> loginUser(@RequestBody LinkedHashMap<String, String> Buyer){
		Buyer u = uServ.loginBuyer(Buyer.get("username"), Buyer.get("password"));
		if(u == null) {
			return new ResponseEntity<Buyer>(u, HttpStatus.FORBIDDEN);
		}
		return new ResponseEntity<Buyer>(u, HttpStatus.OK);
	}
	
	@GetMapping("/{username}")
	public ResponseEntity<Buyer> getUser(@PathVariable("username")String username){
		Buyer u = uServ.displayBuyer(username);
		if(u == null) {
			return new ResponseEntity<Buyer>(u, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Buyer>(u, HttpStatus.OK);
	}
	
	
	
	@PostMapping("/validate")
	public ResponseEntity<String> validateUser(@RequestBody @Valid Buyer u, BindingResult result){
		if(result.hasErrors()) {
			System.out.println("Errors were had");
			System.out.println(result.getFieldError());
			return new ResponseEntity<String>(result.getFieldError().getCode() + " " + result.getFieldError().getDefaultMessage(), HttpStatus.NOT_ACCEPTABLE);
		}
		return new ResponseEntity<String>("Buyer is valid", HttpStatus.OK);
	}
	
}

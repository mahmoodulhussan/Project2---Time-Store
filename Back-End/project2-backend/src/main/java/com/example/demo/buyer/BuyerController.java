package com.example.demo.buyer;

import java.util.List;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.example.demo.service.UserService;

//import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
//@RequestMapping(value = )
@NoArgsConstructor
public class BuyerController {

	
	@GetMapping
	public List<Buyer> getBuyers() {
		return null;
		
	}
}

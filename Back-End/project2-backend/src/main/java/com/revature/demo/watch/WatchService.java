package com.revature.demo.watch;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class WatchService {

	public List<Watch> getWatches(){
		return List.of(new Watch(1,	200, "Rolex", "rolex123.jpg"));
	}
	
}

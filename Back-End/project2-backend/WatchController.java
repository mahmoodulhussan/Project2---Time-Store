package com.revature.demo.watch;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="api/vi/watch")
public class WatchController {
	private final WatchService watchService;
	
	@Autowired
	public WatchController(WatchService watchService) {
		this.watchService = watchService;
	}
	
	@GetMapping
	public List<Watch> getWatches(){
		return watchService.getWatches();
	}
	
}

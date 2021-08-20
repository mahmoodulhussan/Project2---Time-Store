package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Watch;
import com.example.demo.repository.WatchRepository;

@Service
public class WatchService {
	private final WatchRepository watchRepository;
	
	@Autowired
	public WatchService(WatchRepository watchRepository) {
		this.watchRepository = watchRepository;
	}
	
	public List<Watch> getWatchs(){
		return watchRepository.findAll();
	}
	
	public void addNewWatch(Watch watch) {
		Optional<Watch> watchOptional = watchRepository.findByDescription(watch.getDiscription());
		if(watchOptional.isPresent()) {
			throw new IllegalStateException("watch already exists");
		}
		watchRepository.save(watch);
	}
	
	public void deleteStudent(Integer watchid) {
		boolean exists = watchRepository.existsById(watchid);
		if(!exists) {
			throw new IllegalStateException("watch doesn't exist");
		}
		watchRepository.deleteById(watchid);
	}

}

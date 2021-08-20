package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Watch;

@Repository
	public interface WatchRepository extends JpaRepository<Watch, Integer>{
		//SELECT * FROM student WHERE email = ?
		Optional<Watch> findById(int watchid);
		Optional<Watch> findByDescription(String discription);
	}

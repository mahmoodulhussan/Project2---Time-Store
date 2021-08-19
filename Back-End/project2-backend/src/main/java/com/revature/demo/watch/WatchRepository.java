package com.revature.demo.watch;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WatchRepository extends JpaRepository<Watch, Integer> {
	
	public List<Watch> findAll();
	public Watch findByWatchName(String watchName);
	public Watch findById(int watchid);
}

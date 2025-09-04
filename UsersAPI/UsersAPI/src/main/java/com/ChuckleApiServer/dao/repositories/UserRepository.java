package com.ChuckleApiServer.dao.repositories;

import com.ChuckleApiServer.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}

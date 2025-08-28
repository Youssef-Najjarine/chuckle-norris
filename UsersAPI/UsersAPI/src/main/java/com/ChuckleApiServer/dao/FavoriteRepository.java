package com.ChuckleApiServer.dao;

import com.ChuckleApiServer.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoriteRepository extends JpaRepository<Favorite, Integer> {
}

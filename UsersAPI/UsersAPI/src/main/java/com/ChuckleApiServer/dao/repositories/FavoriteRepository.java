package com.ChuckleApiServer.dao.repositories;

import com.ChuckleApiServer.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Integer> {

    @Query(value= "SELECT * FROM favorites WHERE rank=rank", nativeQuery = true)
    List<Favorite> getFavoritesByRank(@Param("rank") int rank);

}

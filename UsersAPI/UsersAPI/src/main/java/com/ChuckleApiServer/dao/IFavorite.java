package com.ChuckleApiServer.dao;

import com.ChuckleApiServer.model.Favorite;

import java.util.List;
import java.util.Optional;

public interface IFavorite {

     List<Favorite> getAllFavorites();
     Optional<Favorite> getFavoriteByRank(Integer id);
     Favorite addFavorite(Favorite aFavorite);
     Favorite updateFavorite(Favorite aFavorite);
     void deleteFavorite(Integer id);
}

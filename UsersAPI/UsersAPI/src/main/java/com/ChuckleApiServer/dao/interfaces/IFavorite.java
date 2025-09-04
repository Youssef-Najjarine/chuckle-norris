package com.ChuckleApiServer.dao.interfaces;

import com.ChuckleApiServer.model.Favorite;

import java.util.List;

public interface IFavorite {

     List<Favorite> getAllFavorites();
     List<Favorite> getFavoriteByRank(int rank);
     Favorite addFavorite(Favorite aFavorite);
     Favorite updateFavorite(Favorite aFavorite);
     void deleteFavorite(Integer id);
}

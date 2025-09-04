package com.ChuckleApiServer.dao.services;

import com.ChuckleApiServer.dao.repositories.FavoriteRepository;
import com.ChuckleApiServer.dao.interfaces.IFavorite;
import com.ChuckleApiServer.model.Favorite;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteServiceImplementation implements IFavorite {

    FavoriteRepository theFavoriteRepository;

    @Autowired
    public FavoriteServiceImplementation(FavoriteRepository theFavoriteRepository) {this.theFavoriteRepository = theFavoriteRepository;}

    @Override
    @Transactional
    public List<Favorite> getAllFavorites() {
        return theFavoriteRepository.findAll();
    }

    @Override
    @Transactional
    public List<Favorite> getFavoriteByRank(int rank) {
        return theFavoriteRepository.getFavoritesByRank(rank);
    }
    @Override
    @Transactional
    public Favorite addFavorite(Favorite aFavorite){
        return theFavoriteRepository.save(aFavorite);
    }

    @Override
    @Transactional
    public Favorite updateFavorite(Favorite aFavorite){
        return theFavoriteRepository.save(aFavorite);
    }

    @Override
    @Transactional
    public void deleteFavorite(Integer id) {
        theFavoriteRepository.deleteById(id);
    }

}

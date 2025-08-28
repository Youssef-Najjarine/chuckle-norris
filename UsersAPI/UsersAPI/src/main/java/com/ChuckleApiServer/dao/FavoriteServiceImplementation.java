package com.ChuckleApiServer.dao;

import com.ChuckleApiServer.model.Favorite;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    public Optional<Favorite> getFavoriteByRank(Integer id){
        return theFavoriteRepository.findById(id);
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

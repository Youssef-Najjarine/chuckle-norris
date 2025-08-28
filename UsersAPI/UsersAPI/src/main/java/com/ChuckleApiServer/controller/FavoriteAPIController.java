package com.ChuckleApiServer.controller;

import com.ChuckleApiServer.dao.FavoriteServiceImplementation;
import com.ChuckleApiServer.model.Favorite;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
public class FavoriteAPIController {

    FavoriteServiceImplementation theFavoriteService;

    public FavoriteAPIController(FavoriteServiceImplementation theFavoriteService) {this.theFavoriteService = theFavoriteService;}

    @GetMapping("/Favorites")
    public List<Favorite> getAllFavorites(){
        return theFavoriteService.getAllFavorites();
    }

    @GetMapping("/Favorites/{id}")
    public Optional<Favorite> getFavoriteByRank(@PathVariable int id) {
        return theFavoriteService.getFavoriteByRank(id);
    }

    @PostMapping("/Favorites")
    public Favorite addFavorite(@RequestBody Favorite newFavorite){
        return theFavoriteService.addFavorite(newFavorite);
    }

    @PutMapping("/Favorites")
    public Favorite updateFavorite(@RequestBody Favorite updatedFavorite){
        return theFavoriteService.updateFavorite(updatedFavorite);
    }

    @DeleteMapping("/Favorites/{id}")
    public void deleteUser(@PathVariable int id) {
        theFavoriteService.deleteFavorite(id);
    }



}

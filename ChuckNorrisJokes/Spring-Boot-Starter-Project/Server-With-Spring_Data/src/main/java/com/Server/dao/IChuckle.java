package com.Server.dao;

import com.Server.model.ChuckModel;

import java.util.List;
import java.util.Optional;

public interface IChuckle {


    public List<ChuckModel> getAllJokes();


    public Optional<ChuckModel> findJoke(String Jkey);


    public ChuckModel addJoke(ChuckModel aJoke);


    public ChuckModel updateJoke(ChuckModel aJoke);



    public void deletechuckApiModel(String priKey);


}

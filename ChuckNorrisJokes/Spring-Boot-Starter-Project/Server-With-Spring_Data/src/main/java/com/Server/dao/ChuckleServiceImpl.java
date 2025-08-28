package com.Server.dao;


import com.Server.model.ChuckModel;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;





@Service
public class ChuckleServiceImpl implements IChuckle{

    ChuckRepository theChuckRepository;

    @Autowired
    public ChuckleServiceImpl(ChuckRepository theChuckRepository){
        this.theChuckRepository = theChuckRepository;
    }

    @Override
    public List<ChuckModel> getAllJokes() {
        return theChuckRepository.findAll();
    }

    @Override
    public Optional<ChuckModel> findJoke(String Jkey) {
        return theChuckRepository.findById(Jkey);
    }

    @Override
    @Transactional
    public ChuckModel addJoke(ChuckModel aJoke) {
        return theChuckRepository.save(aJoke);
    }

    @Override
    @Transactional
    public ChuckModel updateJoke(ChuckModel aJoke) {
        return theChuckRepository.save(aJoke);
    }

    @Override
    @Transactional
    public void deletechuckApiModel(String priKey) {
theChuckRepository.deleteById(priKey);
    }
}

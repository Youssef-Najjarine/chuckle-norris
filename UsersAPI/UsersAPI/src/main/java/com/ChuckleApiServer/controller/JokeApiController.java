package com.ChuckleApiServer.controller;
import com.ChuckleApiServer.dao.services.JokeService;
import com.ChuckleApiServer.model.Joke;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping
public class JokeApiController {

    JokeService theJokeService = new JokeService();



    @GetMapping("/Joke")
    public Joke getJoke(){

        return  theJokeService.getRandomJoke();
    }




}

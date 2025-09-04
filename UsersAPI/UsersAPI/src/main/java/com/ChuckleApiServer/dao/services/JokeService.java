package com.ChuckleApiServer.dao.services;
import com.ChuckleApiServer.dao.interfaces.IJoke;
import com.ChuckleApiServer.model.Joke;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestTemplate;

@Service
public class JokeService implements IJoke {

    Joke theJoke = null;

    public Joke getRandomJoke() {
        RestTemplate randomJoke = new RestTemplate();
        theJoke = randomJoke.getForObject("https://api.chucknorris.io/jokes/random", Joke.class);
        return theJoke;

    }

 /*   private final RestClient randomJoke;


    public JokeService() {
        this.randomJoke = RestClient.builder()
                .baseUrl("https://api.chucknorris.io")
                .build();
    }

    public Joke getJoke() {
        return randomJoke.get()
                .uri("/jokes/random")
                .retrieve()
                .body(Joke.class);
    }*/

}

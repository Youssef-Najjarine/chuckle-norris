package com.frank.gamblerApiClient.services;

import com.frank.gamblerApiClient.models.ChuckNorris;
import com.frank.gamblerApiClient.models.ChuckNorris.*;


import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.client.RestTemplate;



public class ChuckIOService {

    private final String BASE_URL;

    private final RestTemplate restTemplate = new RestTemplate();


public ChuckIOService(){
    BASE_URL = "https://api.chucknorris.io";
}


public ChuckNorris[] getTheChuckJokes(){


    ChuckNorris[] theChuckJokes = null;



    try {
        //                         getForObject(URL-for-the-API-Call , What you the JSON converted to
        theChuckJokes = restTemplate.getForObject(BASE_URL + "/jokes/random",  ChuckNorris[].class);
    } catch (RestClientResponseException exceptionObj) {
        // handles exceptions thrown by rest template and contains status codes
        // Display the status code and any message related too teh error
        System.out.println(exceptionObj.getRawStatusCode() + " : " + exceptionObj.getStatusText());
    } catch (ResourceAccessException exceptionObj) {
        // i/o error, ex: the server isn't running
        // Since the request was never processed there is no status code to display
        // YOu can still display or log the message
        System.out.println(exceptionObj.getMessage());
    }
    return theChuckJokes;
}


}

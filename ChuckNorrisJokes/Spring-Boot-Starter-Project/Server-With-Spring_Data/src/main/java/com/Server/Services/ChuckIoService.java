package com.Server.Services;

import com.Server.model.ChuckModel;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.client.RestTemplate;

import com.Server.model.ChuckModel.*;


public class ChuckIoService {

    private final String BASE_URL;




    private final RestTemplate restTemplate = new RestTemplate();

    public ChuckIoService(){

        BASE_URL = "http://localhost:8081/v1/";
    }



    public  ChuckModel[] getTheChuckJokes(){

    ChuckModel[] theChuckJokes = null;



    try {
        //                         getForObject(URL-for-the-API-Call , What you the JSON converted to
        theChuckJokes = restTemplate.getForObject(BASE_URL + "jokes",  ChuckModel[].class);
    } catch (RestClientResponseException expceptionObj) {
        // handles exceptions thrown by rest template and contains status codes
        // Display the status code and any message related too teh error
        System.out.println(expceptionObj.getRawStatusCode() + " : " + expceptionObj.getStatusText());
    } catch (ResourceAccessException exceptionObj) {
        // i/o error, ex: the server isn't running
        // Since the request was never processed there is no status code to display
        // YOu can still display or log the message
        System.out.println(exceptionObj.getMessage());
    }
      return theChuckJokes;
}


}

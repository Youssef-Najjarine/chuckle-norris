package com.frank.gamblerApiClient;

import com.frank.gamblerApiClient.models.ChuckNorris;
import com.frank.gamblerApiClient.models.ChuckNorris.*;
import com.frank.gamblerApiClient.services.ChuckIOService;

public class ChuckNorrisApiClientApp {

    public static void main(String[] args) {
ChuckIOService thechuckService = new ChuckIOService();


for(ChuckNorris aChuckJoke : thechuckService.getTheChuckJokes()){
    aChuckJoke.displayChuckJokes();
}




    } // End of main()
}

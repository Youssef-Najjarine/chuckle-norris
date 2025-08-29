package com.Server.controller;


import com.Server.dao.ChuckleServiceImpl;
import com.Server.model.ChuckModel;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/v1")
public class ChuckApiController {

    ChuckleServiceImpl theChuckService;



    public ChuckApiController(ChuckleServiceImpl theChuckService){
        this.theChuckService = theChuckService;
    }




    @GetMapping("/jokes")
    public List<ChuckModel> getJokes(){
        return theChuckService.getAllJokes();
    }

@GetMapping("/jokes/{id}")
public Optional<ChuckModel> findaJoke(@PathVariable String id){
        return theChuckService.findJoke(id);
}

    @PostMapping("/jokes")
    public ChuckModel addAJoke(@RequestBody ChuckModel newJoke){
        return theChuckService.addJoke(newJoke);
    }

@PutMapping("/jokes")
    public ChuckModel updateJoke(@RequestBody ChuckModel updatedJoke){
        return theChuckService.updateJoke(updatedJoke);
}


@DeleteMapping("/jokes/{id}")
    public void removeJoke(@PathVariable String id){
        theChuckService.deletechuckApiModel(id);
}

@GetMapping("/jokes/search")
    public Optional<ChuckModel> getJokebyName(@RequestParam String name) {
        return  theChuckService.findJoke(name);
}


}

package com.ChuckleApiServer.controller;


import com.ChuckleApiServer.dao.services.UserServiceImplementation;
import com.ChuckleApiServer.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping
public class UserApiController {

    UserServiceImplementation theUserService;

    public UserApiController(UserServiceImplementation theUserService) {this.theUserService = theUserService;}

    @GetMapping("/User/{id}")
    public Optional<User> getUserInfo(@PathVariable int id){
        return theUserService.getUserInfo(id);
    }

    @PostMapping("/User/Create")
    public User addUser(@RequestBody User newUser){
        return theUserService.addUser(newUser);
    }

    @PutMapping("/User/Update")
    public User updateUser(@RequestBody User updatedUser){
        return theUserService.updateUser(updatedUser);
    }

    @DeleteMapping("User/{id}")
    public void deleteUser(@PathVariable int id) {
        theUserService.deleteUser(id);
    }

}

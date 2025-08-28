package com.ChuckleApiServer.dao;


import com.ChuckleApiServer.model.User;

import java.util.Optional;

public interface IUser {

    public Optional<User> getUserInfo(Integer id);
    public User addUser(User aUser);
    public User updateUser(User aUser);
    public void deleteUser(Integer id);


}

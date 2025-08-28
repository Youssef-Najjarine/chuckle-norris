package com.UsersApiServer.dao;


import com.UsersApiServer.model.User;

import java.util.List;
import java.util.Optional;

public interface IUser {

    public Optional<User> getUserInfo(Integer id);

    public User addUser(User aUser);

    public User updateUser(User aUser);

    public void deleteUser(Integer id);


}

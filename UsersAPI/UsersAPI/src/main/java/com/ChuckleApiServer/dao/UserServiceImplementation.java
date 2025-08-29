package com.ChuckleApiServer.dao;

import com.ChuckleApiServer.model.User;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class UserServiceImplementation implements IUser {

    UserRepository theUserRepository;

    @Autowired
    public UserServiceImplementation(UserRepository theUserRepository) {this.theUserRepository = theUserRepository;}

    @Override
    public Optional<User> getUserInfo(Integer id) {
        return theUserRepository.findById(id);
    }

    @Override
    @Transactional
    public User addUser(User aUser) {
        return theUserRepository.save(aUser);
    }

    @Override
    @Transactional
    public User updateUser(User aUser){
        return theUserRepository.save(aUser);
    }

    @Override
    @Transactional
    public void deleteUser(Integer id) {
        theUserRepository.deleteById(id);
    }
}

package DAO;

import Model.chuckApiModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ChuckRepository extends JpaRepository<chuckApiModel, String> {




}

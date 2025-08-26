package DAO;




import Model.chuckApiModel;


import java.util.List;
import java.util.Optional;

public interface IChuck {
    public List<chuckApiModel> getAllJokes();


    public Optional<chuckApiModel> returnchuckApiModel(int Jkey);


    public chuckApiModel addJoke(chuckApiModel aJoke);


    public chuckApiModel updateJoke(chuckApiModel aJoke);



    public void deletechuckApiModel(int priKey);


}

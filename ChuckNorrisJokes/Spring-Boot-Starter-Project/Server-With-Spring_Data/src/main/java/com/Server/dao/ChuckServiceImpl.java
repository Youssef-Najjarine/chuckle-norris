package DAO;

import Model.chuckApiModel;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.beans.Transient;
import java.util.List;





DAO.ChuckRepository theChuckRepository;
@Service
public class ChuckServiceImpl implements DAO.IChuck {

@Autowired
    public ChuckServiceImpl(DAO.ChuckRepository theChuckRepository){
    this.the= theChuckRepository;

}


@Override
    public List<chuckApiModel> getAllJokes(){
    return theChuckRepository.findAll();
}



    @Override


}

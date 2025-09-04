package com.ChuckleApiServer.model;

import javax.xml.crypto.Data;
import java.lang.reflect.Array;
import java.util.Date;
import java.util.Objects;

public class Joke {

    private String value;


    //Constructors
    public Joke() {}
    public Joke(String value) {this.value = value;}

    //Get/Set
    public String getValue() {return value;}
    public void setValue(String value) {this.value = value;}

    //Overrides
    @Override
    public String toString() {
        return "Joke{" +
                "value='" + value + '\'' +
                '}';
    }
    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Joke joke = (Joke) o;
        return Objects.equals(value, joke.value);
    }
    @Override
    public int hashCode() {
        return Objects.hashCode(value);
    }


    
}

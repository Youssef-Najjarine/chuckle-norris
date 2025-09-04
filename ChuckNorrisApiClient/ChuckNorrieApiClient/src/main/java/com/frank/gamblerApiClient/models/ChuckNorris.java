package com.frank.gamblerApiClient.models;

import java.util.Objects;

public class ChuckNorris {




    private String value;


    public ChuckNorris(){};



    public ChuckNorris(String value) {

        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }



    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        ChuckNorris that = (ChuckNorris) o;
        return  Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(value);
    }


    @Override
    public String toString() {
        return "ChuckNorris{" +

                "'value='" + value + '\'' +
                '}';
    }

    public void displayChuckJokes(){
        System.out.println("value:\t\t\t" + value);
        System.out.println("-".repeat(50));
    }


}

package com.Server.model;

import java.util.Objects;

public class ChuckModel {

    private String iconurl;

    private String id;

    private String url;

    private String value;


    public ChuckModel(){};

    public ChuckModel(String iconurl, String id, String url, String value) {
        this.iconurl = iconurl;
        this.id = id;
        this.url = url;
        this.value = value;
    }

    public String getIconurl() {
        return iconurl;
    }

    public void setIconurl(String iconurl) {
        this.iconurl = iconurl;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
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
        ChuckModel that = (ChuckModel) o;
        return Objects.equals(iconurl, that.iconurl) && Objects.equals(id, that.id) && Objects.equals(url, that.url) && Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(iconurl, id, url, value);
    }


    @Override
    public String toString() {
        return "ChuckModel{" +
                "iconurl='" + iconurl + '\'' +
                ", id='" + id + '\'' +
                ", url='" + url + '\'' +
                ", value='" + value + '\'' +
                '}';
    }
}

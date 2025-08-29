package Model;

import java.util.Objects;

public class chuckApiModel {

private String iconurl;

private String id;

private String url;

private String value;



    public chuckApiModel(){};

    public chuckApiModel(String iconurl, String value, String url, String id) {
        this.iconurl = iconurl;
        this.value = value;
        this.url = url;
        this.id = id;
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
        chuckApiModel that = (chuckApiModel) o;
        return Objects.equals(iconurl, that.iconurl) && Objects.equals(id, that.id) && Objects.equals(url, that.url) && Objects.equals(value, that.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(iconurl, id, url, value);
    }


    @Override
    public String toString() {
        return "chuckApiModel{" +
                "iconurl='" + iconurl + '\'' +
                ", id='" + id + '\'' +
                ", url='" + url + '\'' +
                ", value='" + value + '\'' +
                '}';
    }
}

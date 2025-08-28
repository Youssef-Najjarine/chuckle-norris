package com.ChuckleApiServer.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name="favorites")
public class Favorite {
    /*

    favorite_id
    value
    rank
    is_favorite
    user_id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="favorite_id")
    private int favoriteId;

    private String value;

    private int rank;

    @Column(name="is_favorite")
    private boolean isFavorite;

    @Column(name="user_id")
    private int userId;

    //Constructors

    public Favorite() {};

    public Favorite(int favoriteId, String value, int rank, boolean isFavorite, int userId) {
        this.favoriteId = favoriteId;
        this.value = value;
        this.rank = rank;
        this.isFavorite = isFavorite;
        this.userId = userId;
    }

    //Getters/Setters


    public int getFavoriteId() {
        return favoriteId;
    }

    public void setFavoriteId(int favoriteId) {
        this.favoriteId = favoriteId;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public boolean isFavorite() {
        return isFavorite;
    }

    public void setFavorite(boolean favorite) {
        isFavorite = favorite;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Favorite{" +
                "favoriteId=" + favoriteId +
                ", value='" + value + '\'' +
                ", rank=" + rank +
                ", isFavorite=" + isFavorite +
                ", userId=" + userId +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Favorite favorite = (Favorite) o;
        return favoriteId == favorite.favoriteId && rank == favorite.rank && isFavorite == favorite.isFavorite && userId == favorite.userId && Objects.equals(value, favorite.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(favoriteId, value, rank, isFavorite, userId);
    }
}

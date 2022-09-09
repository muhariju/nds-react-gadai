package id.co.nds.gadai.models;

import java.sql.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class UserModel {
    @NotEmpty(message = "Tidak Boleh Kosong")
    private String userId;
    @NotEmpty(message = "Tidak Boleh Kosong")
    private String userName;
    @NotEmpty(message = "Tidak Boleh Kosong")
    private String userHp;
    private String userDesc;
    @NotNull(message = "Tidak Boleh Kosong")
    private Double userTxnLimit;
    @NotNull(message = "Tidak Boleh Kosong")
    private Date userRegDate;
    private String recStatus;
    private Integer actorId;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserHp() {
        return userHp;
    }

    public void setUserHp(String userHp) {
        this.userHp = userHp;
    }

    public String getUserDesc() {
        return userDesc;
    }

    public void setUserDesc(String userDesc) {
        this.userDesc = userDesc;
    }

    public Double getUserTxnLimit() {
        return userTxnLimit;
    }

    public void setUserTxnLimit(Double userTxnLimit) {
        this.userTxnLimit = userTxnLimit;
    }

    public Date getUserRegDate() {
        return userRegDate;
    }

    public void setUserRegDate(Date userRegDate) {
        this.userRegDate = userRegDate;
    }

    public String getRecStatus() {
        return recStatus;
    }

    public void setRecStatus(String recStatus) {
        this.recStatus = recStatus;
    }

    public Integer getActorId() {
        return actorId;
    }

    public void setActorId(Integer actorId) {
        this.actorId = actorId;
    }

}
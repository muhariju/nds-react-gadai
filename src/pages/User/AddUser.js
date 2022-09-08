import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorAlert, successAlert } from "../../alert/SweetAlert";
import { doInsertUser } from "../../api/UserApi";

export const AddUser = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userHp, setUserHp] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [userTxnLimit, setUserTxnLimit] = useState("0");
  const [userRegDate, setUserRegDate] = useState();

  const navigate = useNavigate();

  const changeUserId = (e) => setUserId(e.target.value);
  const changeUserName = (e) => setUserName(e.target.value);
  const changeUserHp = (e) => setUserHp(e.target.value);
  const changeUserDesc = (e) => setUserDesc(e.target.value);
  const changeUserTxnLimit = (e) =>
    setUserTxnLimit(e.target.value.replaceAll(",", ""));
  const changeUserRegDate = (e) => setUserRegDate(e.target.value);

  const onKeyDown = (e) => {
    if ((e.key >= 0 && e.key <= 9) || e.key === "Backspace") {
      return;
    } else {
      e.preventDefault();
    }
  };

  const clickBack = () => navigate(-1);

  const clickSave = async () => {
    const details = {
      userId,
      userName,
      userHp,
      userDesc: userDesc === "" ? null : userDesc,
      userTxnLimit,
      userRegDate,
    };

    const response = await doInsertUser(details);
    if (response.status === 200) {
      successAlert("New user has been save");
      navigate(-1);
    } else {
      errorAlert(
        response.data.responseMessage,
        response.data.responseDescription
      );
    }
  };

  return (
    <fieldset className="container valign-wrapper">
      <div className="center container">
        <h4>Pengaturan User - Baru</h4>
        <div className="row left-align">
          <div className="input-field col s12">
            <h6 className="col s4 pull-s0">User Id</h6>
            <input
              className="col s7"
              value={userId}
              onChange={changeUserId}
            />
          </div>
        </div>
        <div className="row left-align">
          <div className="input-field col s12">
            <h6 className="col s4 pull-s0">Nama User</h6>
            <input
              className="col s7"
              value={userName}
              onChange={changeUserName}
            />
          </div>
        </div>
        <div className="row left-align">
          <div className="input-field col s12">
            <h6 className="col s4 pull-s0">Nomor Hp</h6>
            <input
              className="col s7"
              value={userHp}
              onChange={changeUserHp}
              onKeyDown={onKeyDown}
            />
          </div>
        </div>
        <div className="row left-align">
          <div className="input-field col s12">
            <h6 className="col s4 pull-s0">Keterangan</h6>
            <input
              className="col s7"
              value={userDesc}
              onChange={changeUserDesc}
            />
          </div>
        </div>
        <div className="row left-align">
          <div className="input-field col s12">
            <h6 className="col s4 pull-s0">Maksimal Limit Transaksi User</h6>
            <input
              type="text"
              className="col s7"
              value={Number(userTxnLimit).toLocaleString("en-US")}
              onChange={changeUserTxnLimit}
              onKeyDown={onKeyDown}
            />
          </div>
        </div>
        <div className="row left-align">
          <div className="input-field col s12">
            <h6 className="col s4 pull-s0">Tanggal Masuk</h6>
            <input
              type="date"
              className="col s7"
              value={userRegDate}
              onChange={changeUserRegDate}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s6" />
          <div className="col s3">
            <button onClick={clickBack} className="btn">
              <i className="material-icons left">arrow_back</i>
              Kembali
            </button>
          </div>
          <div className="col s3">
            <button onClick={clickSave} className="btn green">
              <i className="material-icons left">save</i>Simpan
            </button>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

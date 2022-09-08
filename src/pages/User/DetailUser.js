import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { errorAlert, successAlert } from "../../alert/SweetAlert";
import { doDelete, doGetDetailUser, doUpdate } from "../../api/UserApi";

export const DetailUser = () => {
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [userHp, setUserHp] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [userTxnLimit, setUserTxnLimit] = useState("0");
  const [userRegDate, setUserRegDate] = useState();
  const [createdDate, setCreatedDate] = useState();
  const [createdBy, setCreatedBy] = useState();
  const [updatedDate, setUpdatedDate] = useState();
  const [updatedBy, setUpdatedBy] = useState();
  const [recStatus, setRecStatus] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const navigate = useNavigate();

  const changeUserName = (e) => setUserName(e.target.value);
  const changeUserHp = (e) => setUserHp(e.target.value);
  const changeUserDesc = (e) => setUserDesc(e.target.value);
  const changeUserTxnLimit = (e) =>
    setUserTxnLimit(e.target.value.replaceAll(",", ""));

  const onKeyDown = (e) => {
    if ((e.key >= 0 && e.key <= 9) || e.key === "Backspace") {
      return;
    } else {
      e.preventDefault();
    }
  };

  const clickBack = () => navigate(-1);

  const clickDelete = () => {
    Swal.fire({
      title: "Do you want to delete the user?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await doDelete(location.state.id, "admin");

        if (response.status === 200) {
          successAlert("User has been deleted");
          navigate(-1);
        } else {
          errorAlert(
            response.data.responseMessage,
            response.data.responseDescription
          );
        }
      } else if (result.isDenied) {
        Swal.fire("User is not removed", "", "info");
      }
    });
  };

  const clickEdit = () => setIsEdit(true);

  const clickSave = async () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const details = {
          userId: location.state.id,
          userName,
          userHp,
          userDesc,
          userTxnLimit,
        };

        const response = await doUpdate(details);
        console.log("doUpdate: " + JSON.stringify(response));

        if (response.status === 200) {
          successAlert("User has been updated");
        } else {
          errorAlert(
            response.data.responseMessage,
            response.data.responseDescription
          );
        }
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });

    setIsEdit(false);
  };

  const getDetailUser = async () => {
    const response = await doGetDetailUser(location.state.id);

    if (response.status === 200) {
      const details = response.data.responseData;
      setUserName(details.userName);
      setUserHp(details.userHp);
      setUserDesc(details.userDesc);
      setUserTxnLimit(details.userTxnLimit);
      setUserRegDate(details.userRegDate);
      setCreatedDate(details.createdDate);
      setCreatedBy(details.createdBy.toString());
      setUpdatedDate(details.updatedDate);
      setUpdatedBy(details.updatedBy.toString());
      setRecStatus(details.recStatus);
    } else {
      errorAlert(
        response.data.responseMessage,
        response.data.responseDescription
      );
    }
  };

  useEffect(() => {
    getDetailUser();
  }, []);

  return (
    <fieldset className="container valign-wrapper">
      <div className="center container">
        <h4>Pengaturan User - Detail</h4>
        <div className="row left-align">
          <div className="input-field col s12">
            <h6 className="col s4 pull-s0">User Id</h6>
            <input className="col s7" value={location.state.id} disabled />
          </div>
        </div>
        <div className="row left-align">
          <div className="input-field col s12">
            <h6 className="col s4 pull-s0">Nama User</h6>
            <input
              className="col s7"
              value={userName}
              onChange={changeUserName}
              disabled={!isEdit}
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
              disabled={!isEdit}
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
              disabled={!isEdit}
            />
          </div>
        </div>
        <div className="row left-align">
          <div className="input-field col s12">
            <h6 className="col s4 pull-s0">Maksimal Limit Transaksi User</h6>
            <input
              className="col s7"
              value={Number(userTxnLimit).toLocaleString("en-US")}
              onChange={changeUserTxnLimit}
              onKeyDown={onKeyDown}
              disabled={!isEdit}
            />
          </div>
        </div>
        <div className="row left-align">
          <div className="input-field col s12">
            <h6 className="col s4 pull-s0">Tanggal Masuk</h6>
            <input
              className="col s7"
              value={new Date(userRegDate).toLocaleDateString("sv-SE")}
              disabled
            />
          </div>
        </div>
        <div className="row left-align">
          <div className="input-field col s12">
            <h6 className="col s4 pull-s0">Tanggal Buat / Oleh</h6>
            <input
              className="col s7"
              value={
                createdBy
                  ? `${new Date(createdDate).toLocaleDateString(
                      "sv-SE"
                    )} / ${createdBy}`
                  : "-"
              }
              disabled
            />
          </div>
        </div>
        <div className="row left-align">
          <div className="input-field col s12">
            <h6 className="col s4 pull-s0">
              Tanggal Update Terakhir / Oleh
            </h6>
            <input
              className="col s7"
              value={
                updatedBy
                  ? `${new Date(updatedDate).toLocaleDateString(
                      "sv-SE"
                    )} / ${updatedBy}`
                  : "-"
              }
              disabled
            />
          </div>
        </div>

        {!isEdit ? (
          <div className="row">
            <div className="col s3" />
            <div className="col s3">
              <button onClick={clickBack} className="btn">
                <i className="material-icons left">arrow_back</i>
                Kembali
              </button>
            </div>
            <div className="col s3">
              <button
                onClick={clickDelete}
                className="btn red"
                disabled={recStatus === "N"}>
                <i className="material-icons left">delete</i>Hapus
              </button>
            </div>
            <div className="col s3">
              <button
                onClick={clickEdit}
                className="btn green"
                disabled={recStatus === "N"}>
                <i className="material-icons left">edit</i>Ubah
              </button>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </fieldset>
  );
};

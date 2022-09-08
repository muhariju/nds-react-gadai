import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorAlert } from "../../alert/SweetAlert";
import { doSearchUser, getAllUser } from "../../api/UserApi";
import { CircularPreLoader } from "./../../components/CircularPreLoader/index";
import { UserForm } from "./UserForm";
import { UserTable } from "./UserTable";

export const User = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userHp, setUserHp] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [recStatus, setRecStatus] = useState("");
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const changeUserId = (e) => setUserId(e.target.value);
  const changeUserName = (e) => setUserName(e.target.value);
  const changeRecStatus = (e) => setRecStatus(e.target.value);
  const changeUserHp = (e) => setUserHp(e.target.value);
  const changeUserDesc = (e) => setUserDesc(e.target.value);

  const clickSearch = async () => {
    setIsLoading(true);
    const response = await doSearchUser({
      userId,
      userName,
      userHp,
      userDesc,
      recStatus,
    });

    if (response.status === 200) {
      setList(response.data.responseData);
    } else {
      errorAlert(
        response.data.responseMessage,
        response.data.responseDescription
      );
    }

    setIsLoading(false);
  };

  const clickEmpty = () => {
    setUserId("");
    setUserName("");
    setRecStatus("");
    setUserHp("");
    setUserDesc("");
  };

  const clickAdd = () => navigate("/addUser");

  const getUserList = async () => {
    setIsLoading(true);
    const response = await getAllUser();
    console.log(response.data.responseData);
    if (response.status === 200) {
      setList(response.data.responseData);
    } else {
      errorAlert(
        response.data.responseMessage,
        response.data.responseDescription
      );
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div className="container m6">
      <UserForm
        userId={userId}
        userName={userName}
        userHp={userHp}
        userDesc={userDesc}
        recStatus={recStatus}
        changeUserId={changeUserId}
        changeUserName={changeUserName}
        changeUserHp={changeUserHp}
        changeUserDesc={changeUserDesc}
        changeRecStatus={changeRecStatus}
        clickSearch={clickSearch}
        clickEmpty={clickEmpty}
        clickAdd={clickAdd}
      />

      {isLoading ? (
        <div className="valign-wrapper">
          <CircularPreLoader />
        </div>
      ) : (
        <fieldset>
          {list && list.length > 0 ? <UserTable list={list} /> : null}
        </fieldset>
      )}
    </div>
  );
};

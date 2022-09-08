export const UserForm = (props) => {
    const {
      userId,
      recStatus,
      userName,
      userHp,
      userDesc,
      changeUserId,
      changeRecStatus,
      changeUserName,
      changeUserHp,
      changeUserDesc,
      clickSearch,
      clickEmpty,
      clickAdd,
    } = props;
  
    return (
      <fieldset>
        <div className="row">
          <h5>Cari Data User</h5>
          <div className="divider black" />
        </div>
        <div className="row">
          <div className="input-field col s6">
            <label htmlFor="userId">User Id</label>
            <input
              id="userId"
              type="text"
              className="validate"
              value={userId}
              onChange={changeUserId}
            />
          </div>
          <div className="col s6">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              className="browser-default"
              value={recStatus}
              onChange={changeRecStatus}>
              <option disabled>
                Choose your option
              </option>
              <option value="All">All</option>
              <option value="A">Active</option>
              <option value="N">Non-Active</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="username"
              type="text"
              value={userName}
              onChange={changeUserName}
              className="validate"
            />
            <label htmlFor="username">User Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="nomorHp"
              type="text"
              value={userHp}
              onChange={changeUserHp}
              className="validate"
            />
            <label htmlFor="nomorHp">Nomor Hp</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="keterangan"
              type="text"
              value={userDesc}
              onChange={changeUserDesc}
              className="validate"
            />
            <label htmlFor="keterangan">Keterangan</label>
          </div>
        </div>
        <div className="row">
          <div className="col s3" />
          <div className="col s3">
            <button className="btn" onClick={clickSearch}>
              <i className="material-icons left">search</i>Search
            </button>
          </div>
          <div className="col s3">
            <button onClick={clickEmpty} className="btn grey ">
              <i className="material-icons left">delete</i>Kosongkan
            </button>
          </div>
          <div className="col s3">
            <button onClick={clickAdd} className="btn green">
              <i className="material-icons left">add</i>User Baru
            </button>
          </div>
        </div>
      </fieldset>
    );
  };
  
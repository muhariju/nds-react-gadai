import { Link } from "react-router-dom";

export const UserTable = (props) => {
  return (
    <table className="striped">
      <thead>
        <tr>
          <th>User Id</th>
          <th>User Name</th>
          <th>Limit Transaksi</th>
          <th>Status</th>
          <th>action</th>
        </tr>
      </thead>

      <tbody>
        {props.list.map((item) => (
          <tr key={item.userId}>
            <td>{item.userId}</td>
            <td>{item.userName}</td>
            <td>Rp. {item.userTxnLimit.toLocaleString("en-US")}</td>
            <td>{item.recStatus}</td>
            <td>
              <Link to="/detailUser" state={{ id: item.userId }}>
                detail
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

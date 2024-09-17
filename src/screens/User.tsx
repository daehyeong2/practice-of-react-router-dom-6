import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../db";

const User = () => {
  const { userId } = useParams();
  const userData = users[+(userId ?? -1) - 1];
  return (
    <div>
      <h1>
        User with id {userId} is named: {userData.name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet context={{ user: userData }} />
    </div>
  );
};

export default User;

import { Link } from "react-router-dom";
import { users } from "../db";

const Home = () => {
  return (
    <div>
      <ul>
        <h2>Users</h2>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

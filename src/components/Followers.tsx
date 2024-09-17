import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  user: {
    id: number;
    name: string;
  };
}

const Followers = () => {
  const { user } = useOutletContext<FollowersContext>();
  return <h1>Here are {user.name}'s followers</h1>;
};

export default Followers;

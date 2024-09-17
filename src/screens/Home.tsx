import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/about");
  }, 3000);
  return (
    <h1>
      Home<button onClick={() => navigate("/about")}>Go To About</button>
    </h1>
  );
};

export default Home;

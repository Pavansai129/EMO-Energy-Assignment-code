import Cookies from "js-cookie";

const Home = (props) => {
  const onClickLogout = () => {
    const { history } = props;
    Cookies.remove("access_token");
    history.replace("/login");
  };
  return <button onClick={onClickLogout}>Logout</button>;
};

export default Home;

import Cookies from "js-cookie";

const Home = (props) => {
  const onClickLogout = () => {
    const { history } = props;
    Cookies.remove("access_token");
    history.replace("/login");
  };
  const localUsersList = localStorage.getItem("usersList");

  const parsedUsersList = JSON.parse(localUsersList);
  const loginUserId = Cookies.get("access_token");

  const user = parsedUsersList.find(
    (eachUser) => eachUser.userId === loginUserId
  );

  return (
    <div className="flex flex-col flex-1 justify-center items-center px-6 py-12 lg:px-8">
      <h1 className="text-lg">
        Welcome
        <span className="text-indigo-700 font-bold">
          {user.name.toUpperCase()}
        </span>
      </h1>
      <button
        onClick={onClickLogout}
        className="flex mt-3 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;

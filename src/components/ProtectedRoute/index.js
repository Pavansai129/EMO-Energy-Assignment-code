import Cookies from "js-cookie";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const accessToken = Cookies.get("access_token");
  console.log(accessToken);
  if (accessToken === undefined) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
};

export default ProtectedRoute;

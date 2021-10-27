import React, { useEffect } from "react";
import Admin from "../tempalets/Admin";
import { useSelector } from "react-redux";
import Client from "../tempalets/Client";

export default function Layout(props) {
  const userType = useSelector((state) => state.User.userType);
  const Login = useSelector((state) => state.Login.isLogin);
  console.log(typeof userType);
  useEffect(() => {
    if (!Login) {
      props.history.push("/login");
    }
  });

  //const userType = 1;
  //console.log("USER TYPE", userType);

  let renderComponent = "";
  switch (userType) {
    case 1:
      renderComponent = <Admin />;
      break;
    case 2:
      renderComponent = <Client />;
      break;
    default:
      renderComponent = <h1>ERROR 320!!!!</h1>;
  }
  return <div>{renderComponent}</div>;
}

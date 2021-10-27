import React from "react";
import { useSelector } from "react-redux";
import ClientInfo from "../organisms/client/CompanyInfo/ClientInfo";
import Pending from "../organisms/client/Pending/Pending";
import Wellcome from "../organisms/client/Wellcome/Wellcome";

export default function Client() {
  const isauth = useSelector((state) => state.User.isauth);
  console.log("Hello In Client");
  console.log(isauth);
  let componet = "";
  switch (isauth) {
    case 1:
      componet = <ClientInfo />;
      break;
    case 2:
      componet = <Pending />;
      break;
    case 3:
      componet = <Wellcome />;
      break;
    default:
      componet = "";
  }
  return <div>{componet}</div>;
}

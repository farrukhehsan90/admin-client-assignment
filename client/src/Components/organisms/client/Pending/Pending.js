import React, { useEffect } from "react";
import API from "../../../../Helper/Api";
import { useDispatch, useSelector } from "react-redux";
import { setUserType } from "../../../../store/actions/index";
import { useTranslation } from "react-i18next";

const Pending = (props) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.User.userId);

  const [t] = useTranslation();
  setInterval(() => {
    API.get("/status?userId=" + id)
      .then((response) => {
        if (response.data.statusCode === 200) {
          dispatch(setUserType(2, response.data.isauth, id));
          props.history.push("/login");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, 15000);

  return (
    <div className="text-center">
      <h1>{t("pending")}</h1>
    </div>
  );
};

export default Pending;

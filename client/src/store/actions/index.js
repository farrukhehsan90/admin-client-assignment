export const login = (isauth) => {
  return {
    type: "LOGED_IN",
  };
};

export const setnavItems = (items) => {
  return {
    type: "SET_NAV_ITEMS",
    items,
  };
};

export const setActiveNavItem = (item) => {
  return {
    type: "SET_ACTIVE_NAV_ITEM",
    item,
  };
};

export const setUserType = (userType, isauth, userId) => {
  localStorage.setItem("userType", userType);
  localStorage.setItem("isauth", isauth);
  localStorage.setItem("userId", userId);
  if (userType === "1")
    return {
      type: "ADMIN",
      userId,
    };
  else {
    return {
      type: "CLIENT",
      isauth,
      userId,
    };
  }
};

export const setExpirationDate = () => {
  const d = new Date();
  const newDate = new Date(new Date(d).setHours(d.getHours() + 24));
  localStorage.setItem("expirationDate", newDate);
};

export const logout = () => {
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userType");
  localStorage.removeItem("isauth");
  localStorage.removeItem("userId");
  return {
    type: "LOG_OUT",
  };
};

export const checkStatus = () => {
  return (dispatch) => {
    const now = new Date();
    let userType = localStorage.getItem("userType");
    let isauth = localStorage.getItem("isauth");
    let userId = localStorage.getItem("userId");
    let expirationdate = localStorage.getItem("expirationDate");
    if (expirationdate) {
      if (now > expirationdate) {
        dispatch(logout());
      } else {
        dispatch(login());
        userId = userId.toString();
        isauth = parseInt(isauth);
        userType = userType.toString();
        dispatch(setUserType(userType, isauth, userId));
      }
    }
  };
};

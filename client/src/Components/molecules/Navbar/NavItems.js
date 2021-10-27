import React from "react";
import { Menu, Input, Divider } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveNavItem, logout } from "../../../store/actions/index";
import { useTranslation } from "react-i18next";
export default function NavItems(props) {
  const [t] = useTranslation();
  const navItems = useSelector((state) => state.NavItems.navItems);
  const Login = useSelector((state) => state.Login.isLogin);
  let activeItem = useSelector((state) => state.NavItems.selectedNavItem);
  if (activeItem === "" || activeItem === undefined) {
    activeItem = "Dashboard";
  }
  const dispatch = useDispatch();
  return (
    <div>
      {Login ? (
        <div>
          <Menu secondary>
            {navItems.map((item, index) => {
              return (
                <Menu.Item
                  name={t(item.name)}
                  active={item.name === activeItem}
                  onClick={(e) => dispatch(setActiveNavItem(item.name))}
                />
              );
            })}
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder={t("Search")} />
              </Menu.Item>
              <Menu.Item
                name={t("logout")}
                onClick={() => {
                  dispatch(logout());
                }}
              />
            </Menu.Menu>
          </Menu>
          <Divider />
        </div>
      ) : null}
      {props.children}
    </div>
  );
}

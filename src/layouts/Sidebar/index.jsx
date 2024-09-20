import React from "react";
import { ConfigProvider, Menu } from "antd";
import { forwardRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH_HOME } from "../../routes/paths";
import { routes } from "../../routes/routes";
import MainLogo from "../../assets/MainLogo.png";

// import { getItemLocalStorage } from "../../../utils/storage";
import { FC, useCallback, useEffect, useRef, useState } from "react";

export const Sidebar = forwardRef(() => {
    const [user, setUser] = useState({});

    const navigate = useNavigate();
    const location = useLocation();

    const renderedSidebarMenu = routes.map(
      ({ path, name, show, children }) => {
        return show
          ? {
              key: path || name,
              label: name,
              onClick: () => path && navigate(path),
            }
          : null;
      }
    );

    // const getUser = useCallback(async () => {
    //   try {
    //     const userInfo = getItemLocalStorage(LocalStorageKey.user);
    //     setUser(userInfo);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }, []);

    // useEffect(() => {
    //   getUser();
    // }, []);

    return (
      <div
        className="h-full"
      >
        <ConfigProvider>
          <div className="flex justify-start items-center text-black h-[120px] font-bold">
            <img
              src={MainLogo} 
              alt="logo" 
              className="w-[120px] h-[120px]"
            />
            <h1 className="-ml-5 text-xl">EvoSchedule</h1>
          </div>
          <Menu
            defaultOpenKeys={[PATH_HOME]}
            selectedKeys={[location.pathname, location.pathname.slice(1)]}
            items={renderedSidebarMenu}
            className="!justify-center gap-[30px]"
          />
        </ConfigProvider>
      </div>
    )

  }
);

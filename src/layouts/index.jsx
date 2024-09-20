import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
// import { Header } from "antd/es/layout/layout";
// import { useState } from "react";
// import useLocalStorage from "../hooks/useLocalStorage";
// import { LocalStorageKey } from "../constants";


const { Content } = Layout;

export default function AppLayout({children}) {
  return (
    <div
      className="min-h-[100vh] w-[100vw] relative"  
    >
      <div className="fixed left-0 w-[250px] h-full bg-white shadow-lg z-[45]">
          <Sidebar />
      </div>

      <div className="fixed top-0 left-[250px] right-0 h-[120px] z-[45]">
          <Header />
      </div>

      <Layout
         className="flex justify-center h-full pl-[250px] item-center transition-all duration-300"
      >
        <Content  className="h-full">
          <Outlet />
          {children}
        </Content>
      </Layout>
    </div>
  );
}

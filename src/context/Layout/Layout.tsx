import React from "react";
import { SideMenu } from "../../components/SideMenu/SideMenu.js";
import { Content, LayoutWrapper } from './LayoutStyled.js';
import { Outlet } from 'react-router-dom';
import { Login } from "../../pages/Login/Login.jsx";
import { useAuth } from "../AuthContext.jsx";
import { Header } from "../../components/Header/Header.js";
import { useState, useEffect } from "react";

export const Layout = () => {
    const { auth, login, logout, token } = useAuth();
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

    useEffect(() => {
      const storedToken = localStorage.getItem("authToken");
      const isLogin = localStorage.getItem("login")==='true';
      const storedUsername = localStorage.getItem("username");
      if(isLogin && storedToken && storedUsername && !auth) {
        login(storedToken, storedUsername);
      } else if (!isLogin && auth) {
        logout();
      }
    }, [auth, login, logout]);

    return (
      auth ?
        <LayoutWrapper>
          <SideMenu collapsed={isMenuCollapsed}/>
          <Content>
            <Header title="Dashboard" cy-id="header-title" toggleMenu={() => setIsMenuCollapsed(prev => !prev)}/>
            <Outlet></Outlet>
          </Content>
        </LayoutWrapper >
        :
        <Login />
    );
  }
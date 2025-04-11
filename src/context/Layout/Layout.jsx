import { SideMenu } from "../../components/SideMenu/SideMenu.jsx";
import { Content, LayoutWrapper } from './LayoutStyled.js';
import { Outlet } from 'react-router-dom';
import { Login } from "../../pages/Login/Login.jsx";
import { useAuth } from "../AuthContext.jsx";
import { Header } from "../../components/Header/Header.jsx";
import { useState, useEffect } from "react";

export const Layout = () => {
    const { auth, login, logout } = useAuth();
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

    useEffect(() => {
      const isLogin = localStorage.getItem("login")==='true';
      if(isLogin && !auth) {
        login();
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
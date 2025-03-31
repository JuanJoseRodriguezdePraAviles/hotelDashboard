import { SideMenu } from "../../components/SideMenu/SideMenu";
import { Content, LayoutWrapper } from './LayoutStyled';
import { Outlet } from 'react-router-dom';
import { Login } from "../../pages/Login/Login.jsx";
import { useAuth } from "../AuthContext.jsx";
import { Header } from "../../components/Header/Header";

export const Layout = () => {
    const { auth } = useAuth();
  
    return (
      auth ?
        <LayoutWrapper>
          <SideMenu />
          <Content>
            <Header title="Dashboard" />
            <Outlet></Outlet>
          </Content>
        </LayoutWrapper >
        :
        <Login />
    );
  }
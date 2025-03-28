import { useState } from 'react'
import React from 'react';
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard';
import { GuestList } from './pages/GuestList/GuesList';
import { Bookings } from './pages/Bookings/Bookings';
import { ConciergeList } from './pages/ConciergeList/ConciergeList';
import { RoomList } from './pages/RoomList/RoomList';
import { ReviewsList } from './pages/ReviewsList/ReviewsList';
import { GuestDetails } from './pages/GuestDetails/GuestDetails';
import { Header } from './components/Header/Header';
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import { SideMenu } from './components/SideMenu/SideMenu';
import { Content, LayoutWrapper } from './AppStyled';

const Layout = () => {
  return (
    <LayoutWrapper>
      <SideMenu />
      <Content>
        <Header title="Dashboard"/>
        <Outlet></Outlet>
      </Content>
    </LayoutWrapper>
  );
}

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: 'bookings',
        element: <Bookings />
      },
      {
        path: 'conciergeList',
        element: <GuestDetails />
      },
      {
        path: 'guestList',
        element: <GuestList />
      },
      {
        path: 'reviewsList',
        element: <ReviewsList />
      },
      {
        path: 'roomList',
        element: <RoomList />
      }
    ],
  }
]);

function App() {
  return (
    <>
      {<RouterProvider router={router} />}
    </>
  )
}

export default App;

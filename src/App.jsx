import { useState } from 'react'
import React from 'react';
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard';
import { GuestList } from './pages/GuestList/GuesList';
import { Bookings } from './pages/Bookings/Bookings';
import { ConciergeList } from './pages/ConciergeList/ConciergeList';
import { RoomList } from './pages/RoomList/RoomList';
import { ReviewsList } from './pages/ReviewsList/ReviewsList';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import { Layout } from './context/Layout/Layout.jsx';



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
        element: <ConciergeList />
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  )
}

export default App;

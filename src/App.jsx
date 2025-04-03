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
import { Profile } from './pages/Profile/Profile.jsx';
import { NewBooking } from './pages/Bookings/NewBooking.jsx';
import { EditBooking } from './pages/Bookings/EditBooking.jsx';
import { GuestDetails } from './pages/GuestDetails/GuestDetails.jsx';
import { NewGuest } from './pages/GuestList/NewGuest.jsx';
import { EditGuest } from './pages/GuestList/EditGuest.jsx';
import { NewRoom } from './pages/RoomList/NewRoom.jsx';
import { EditRoom } from './pages/RoomList/EditRoom.jsx';



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
        path: 'newBooking',
        element: <NewBooking />
      },
      {
        path: 'editBooking/:bookingId',
        element: <EditBooking />
      },
      {
        path: 'guestDetails/:bookingId',
        element: <GuestDetails />
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
        path: 'newGuest',
        element: <NewGuest />
      },
      {
        path: 'editGuest/:guestId',
        element: <EditGuest />
      },
      {
        path: 'reviewsList',
        element: <ReviewsList />
      },
      {
        path: 'roomList',
        element: <RoomList />
      },
      {
        path: 'newRoom',
        element: <NewRoom />
      },
      {
        path: 'editRoom/:roomId',
        element: <EditRoom />
      },
      {
        path: 'profile',
        element: <Profile />
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

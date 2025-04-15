import { useState } from 'react'
import React from 'react';
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard.js';
import { GuestList } from './pages/GuestList/GuesList.js';
import { Bookings } from './pages/Bookings/Bookings.js';
import { ConciergeList } from './pages/ConciergeList/ConciergeList.js';
import { RoomList } from './pages/RoomList/RoomList.js';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext.js';
import { Layout } from './context/Layout/Layout.js';
import { Profile } from './pages/Profile/Profile.js';
import { NewBooking } from './pages/Bookings/NewBooking.js';
import { EditBooking } from './pages/Bookings/EditBooking.js';
import { GuestDetails } from './pages/GuestDetails/GuestDetails.js';
import { NewGuest } from './pages/GuestList/NewGuest.js';
import { EditGuest } from './pages/GuestList/EditGuest.js';
import { NewRoom } from './pages/RoomList/NewRoom.js';
import { EditRoom } from './pages/RoomList/EditRoom.js';
import { NewEmployee } from './pages/ConciergeList/NewEmployee.js';
import { EditEmployee } from './pages/ConciergeList/EditEmployee.js';



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
        path: 'newEmployee',
        element: <NewEmployee />
      },
      {
        path: 'editEmployee/:employeeId',
        element: <EditEmployee />
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

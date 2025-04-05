import { useState } from 'react'
import React from 'react';
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import { GuestList } from './pages/GuestList/GuesList.jsx';
import { Bookings } from './pages/Bookings/Bookings.jsx';
import { ConciergeList } from './pages/ConciergeList/ConciergeList.jsx';
import { RoomList } from './pages/RoomList/RoomList.jsx';
import { ReviewsList } from './pages/ReviewsList/ReviewsList.jsx';
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
import { NewEmployee } from './pages/ConciergeList/NewEmployee.jsx';
import { EditEmployee } from './pages/ConciergeList/EditEmployee.jsx';



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

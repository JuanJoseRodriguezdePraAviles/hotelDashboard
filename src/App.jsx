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

function App() {
  return (
    <>
      <GuestDetails />
    </>
  )
}

export default App;

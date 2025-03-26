import { useState } from 'react'
import React from 'react';
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard';
import { GuestList } from './pages/GuestList/GuesList';
import { Bookings } from './pages/Bookings/Bookings';
import { ConciergeList } from './pages/ConciergeList/ConciergeList';

function App() {
  return (
    <>
      <ConciergeList></ConciergeList>
    </>
  )
}

export default App;

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import CalendarComponent from './pages/CalendarComponent'
import Userprofile from './components/Userprofile'
import PrivateRoute from'./components/PrivateRoute'


export default function App() {  
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path="/userprofile" element={<Userprofile />} />
        </Route>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path="/calendar" element={<CalendarComponent/>} />
    </Routes>
    </BrowserRouter>
    </>
   
  )
}

import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import {HomePage } from './routes/Routes'
import {AdminDashboardPage,DashboardFeature} from './routes/AdminRoutes'
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
function App() {

  return (
    <>
     {/* <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header> */}
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<HomePage/>} />
      <Route path='/dashboard' element={<AdminDashboardPage/>}/>
      <Route path='/dashboard/feature' element={<DashboardFeature/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

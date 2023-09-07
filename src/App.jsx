import React from 'react'
import './App.css'
import ConsultationInfo from './Components/ConsultationInfo/ConsultationInfo'
import UserInputName from './Components/UserDetails/UserInputName'
import UserConserns from './Components/UserConcerns/UserConserns'
import UserConsernsMore from './Components/UserConcernsMore/UserConsernsMore'
import UserInfo from './Components/UserDetails/UserInfo/UserInfo'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import UserSymDetails from "./Components/UserSymDetails/UserSymDetails";


function App() {
  

  return (
    <>

    <BrowserRouter>

    <Routes>
      <Route path='/' element={ <ConsultationInfo/>}/>
      <Route path='/userinputname' element={ <UserInputName/>}/>
      <Route path='/userconcerns' element={ <UserConserns/>}/>
      <Route path='/userconcernsmore' element={ <UserConsernsMore/>}/>
      <Route path='/userinfo' element={ <UserInfo/>}/>
      <Route path="/usersymdetails" element={<UserSymDetails />} />

    </Routes>
    
    </BrowserRouter>

   
     

    </>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'
import { UserMail } from "./context/UserMail";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  const [usermail, setUserMail] = useState(""); // user

  const updateUserMail = (newUsermail) => {
    setUserMail(newUsermail);
  };
  const userData = {usermail, updateUserMail};


  return (
    <>
      <UserMail.Provider value={userData}>
        <Header/>
        <Main/>
      </UserMail.Provider>
      <Footer/>
    </>
  )
}

export default App

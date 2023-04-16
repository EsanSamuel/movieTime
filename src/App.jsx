import React, { useState, useEffect } from 'react'
import './App.css'
import { Navbar, Movies, Text, TvSeries, TopRatedTv, TopRatedMovies, Login, Logout } from './components/section'
import { gapi } from 'gapi-script'

const clientId = '933346313398-22f48ghtba2akrbcov27fvk1egovqul7.apps.googleusercontent.com'

const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

const App = () => {
  const [darkmode, setDarkmode] = useState(false)

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: SCOPES
      })
    }
    gapi.load(`client:auth2`, start)
  })



  return (
    <div className={`${darkmode && 'dark-mode'}`}>
      <Navbar handleToggleDarkMode={setDarkmode} />
      {/*<Login />
      <Logout />*/}
      <Text />
      <Movies />
      <TvSeries />
      <TopRatedMovies />
      <TopRatedTv />



    </div>
  )
}

export default App

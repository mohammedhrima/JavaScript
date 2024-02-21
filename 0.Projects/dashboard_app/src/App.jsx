import React, { useContext, useState } from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/new/New'
import Single from './pages/single/Single'
import { userInputs, productInputs } from "./Formsource"
import "./style/dark.scss"
import { DarkModeContext } from './context/darkModeContext'

function App() {
  const { darkMode } = useContext(DarkModeContext);
  // console.log(darkMode);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App

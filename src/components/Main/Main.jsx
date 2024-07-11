import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import Details from './Details'
import New from './New'
import Home from './Home'
const Main = () => {
  return <main className="main">
    <h1>Pokemons</h1>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pokemon/:id' element={<Details />} />
      <Route path='/new' element={<New />} />
      <Route path='/' element={<Navigate to={"/"} />} />
    </Routes>
  </main>;
};
export default Main;
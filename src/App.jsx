import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <BrowserRouter >
        <Header />
        <Main />
      </BrowserRouter >
      <Footer />
    </>
  )
}
export default App
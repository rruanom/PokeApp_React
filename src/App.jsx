import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { ListContext } from "./context/ListContext";

function App() {
  // Creamos la variable pokeList para tener la lista de pokemon buscados
  const [pokeList, setPokeList] = useState([]);

   const addPokemon = (newPokemon) => {
    setPokeList([newPokemon, ...pokeList]);
  } 

  const listPokemon = { pokeList, addPokemon }

  return (
    <>
      <ListContext.Provider value={listPokemon}>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </ListContext.Provider>
    </>
  )
}

export default App
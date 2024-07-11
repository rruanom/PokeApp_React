import React, { useState } from 'react';
import Search from './Search';
import ListaPokemon from './ListaPokemon';

const Home = () => {

  const [pokeList, setPokeList] = useState([]);

  const addPokemon = (newPokemon) => {
    setPokeList([...pokeList,newPokemon]);
  }

  return <section className="home">
    <Search pokeList={pokeList} addPokemon={addPokemon}/>
    <ListaPokemon  pokeList={pokeList} />
  </section>
};

export default Home;

import React, { useState } from 'react';
import Search from './Search';
import ListaPokemon from './ListaPokemon';

const Home = () => {

  const [pokeList, setPokeList] = useState([]);

  const addPokemon = (newPokemon) => {
    setPokeList([newPokemon, ...pokeList]);
  }

  return <section className="home">
    <article>
    <Search pokeList={pokeList} addPokemon={addPokemon}/>
    </article>
    <article>
    <ListaPokemon  pokeList={pokeList} />
    </article>
  </section>
};

export default Home;

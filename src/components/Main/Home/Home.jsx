import React, { useState, useContext, useEffect } from 'react';
import Search from './Search';
import ListaPokemon from './ListaPokemon';
import { ListContext } from "../../../context/ListContext";

const Home = () => {

  const {pokeList, addPokemon} = useContext(ListContext);

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

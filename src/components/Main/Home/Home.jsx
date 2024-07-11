import React, { useState, useContext, useEffect } from 'react';
import Search from './Search';
import ListaPokemon from './ListaPokemon';
import { ListContext } from "../../../context/ListContext";

const Home = () => {

  const {pokeList, setPokeList} = useContext(ListContext);
  const [listaItems, setListaItems] = useState([])

  useEffect(() => {
    setPokeList(listaItems)
  }, [listaItems]);

  const addListaItems = (newPokemon) => {
    setListaItems([newPokemon, ...listaItems]);
  }

  return <section className="home">
    <article>
    <Search pokeList={listaItems} addPokemon={addListaItems}/>
    </article>
    <article>
    <ListaPokemon  pokeList={listaItems} />
    </article>
  </section>
};

export default Home;

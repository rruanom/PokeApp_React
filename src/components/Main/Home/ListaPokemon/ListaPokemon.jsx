import React, { useState, useRef, useEffect } from "react";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import PokeCard from './PokeCard'

const ListaPokemon = ({ pokeList }) => {

  const renderItems = () =>
    pokeList.map((item, i) => (
      <PokeCard
        key={uuidv4()}
        pokemon={item}
      />
    ));

  return <section>
    {renderItems()}
  </section>
};

export default ListaPokemon;

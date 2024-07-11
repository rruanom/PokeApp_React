import React, { useState, useRef, useEffect } from "react";
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import PokeCard from './PokeCard'

const ListaPokemon = ({ pokeList }) => {
  const [renderItems, setRenderItems] = useState()

  useEffect(() => {
      if (pokeList.length !== 0) {
       setRenderItems(pokeList.map((item, i) => (
          <PokeCard
            key={uuidv4()}
            pokemon={item}
          />
        )))
      }
  }, [pokeList]);

  return <section>
    {renderItems}
  </section>
};

export default ListaPokemon;

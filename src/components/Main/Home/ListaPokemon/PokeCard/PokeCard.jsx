import React from 'react';
import { Link } from 'react-router-dom';
import '../PokeCard';
import image_default from '../../../../../assets/pokeball_default.png';

export default function PokeCard({ pokemon }) {
  const { name, id, sprites, types } = pokemon;

  const id1 = id;
  const image1 = sprites.other["official-artwork"].front_default;
  const type1 = types[0].type.name;
  const type2 = types.length > 1 ? types[1].type.name : null;
  let name1 = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  // Clase de tipo principal
  const typeClass = `type-${type1}`;

  return (
    <Link to={`/pokemon/${id}`} state={{ pokemon }} className="pokemon-link">
      <div className={`pokeCard ${typeClass}`}>
        <div className="pokeId">nº{id1}</div>
        <div className="pokeName">{name1}</div>
        <img src={image1 || image_default} alt={name1} />
        <div className="pokeType">{type1}</div>
        {type2 && <div className="pokeType">{type2}</div>}
      </div>
    </Link>
  );
}
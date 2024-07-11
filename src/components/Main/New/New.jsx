import React, { useState, useContext } from 'react';
import { ListContext } from "../../../context/ListContext";

const New = () => {
  const { addPokemon } = useContext(ListContext);

  const [newPokemon, setNewPokemon] = useState({
    id: '',
    name: '',
    sprites: {
      other: {
        "official-artwork": {
          front_default: ''
        }
      }
    },
    types: [
      { type: { name: '' } },
      { type: { name: '' } }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'image') {
      setNewPokemon(pokemon => ({
        ...pokemon,
        sprites: {
          ...pokemon.sprites,
          other: {
            ...pokemon.sprites.other,
            "official-artwork": {
              ...pokemon.sprites.other["official-artwork"],
              front_default: value
            }
          }
        }
      }));
    } else if (name === 'type1' || name === 'type2') {
      const typeIndex = name === 'type1' ? 0 : 1;
      setNewPokemon(pokemon => ({
        ...pokemon,
        types: pokemon.types.map((type, index) =>
          index === typeIndex ? { type: { name: value } } : type
        )
      }));
    } else {
      setNewPokemon(pokemon => ({
        ...pokemon,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pokemonToAdd = {
      id: newPokemon.id,
      name: newPokemon.name,
      sprites: newPokemon.sprites,
      types: newPokemon.types.filter(type => type.type.name !== '')
    };
    addPokemon(pokemonToAdd);
    // Reiniciar el formulario
    setNewPokemon({
      id: '',
      name: '',
      sprites: {
        other: {
          "official-artwork": {
            front_default: ''
          }
        }
      },
      types: [
        { type: { name: '' } },
        { type: { name: '' } }
      ]
    });
    alert('Pokémon añadido con éxito!');
  };

  return (
    <div className="new-pokemon-container">
      <div className="new-pokemon-form">
        <h2 className="form-title">Añadir Nuevo Pokémon</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">Number:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={newPokemon.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newPokemon.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">URL image:</label>
            <input
              type="url"
              id="image"
              name="image"
              value={newPokemon.sprites.other["official-artwork"].front_default}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="type1">Type 1:</label>
            <input
              type="text"
              id="type1"
              name="type1"
              value={newPokemon.types[0].type.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="type2">Type 2 (opcional):</label>
            <input
              type="text"
              id="type2"
              name="type2"
              value={newPokemon.types[1].type.name}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-btn">Añadir Pokémon</button>
        </form>
      </div>
    </div>
  );}

export default New;
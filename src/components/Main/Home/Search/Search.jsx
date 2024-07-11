import React, { useState, useRef, useEffect } from "react";
import axios from 'axios'

const Search = ({ pokeList,addPokemon }) => {
  const [pokemon, setPokemon] = useState('pikachu');
  const [value, setValue] = useState('pikachu');
  const form = useRef();
  const refTime = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
    clearTimeout(refTime.current)
    refTime.current = setTimeout(() => {
        setPokemon(value)
      }, 2000)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPokemon = e.target.keyword.value.toLowerCase();
    const duplicatePokemon = pokeList.find((pokemon) => pokemon.name.toLowerCase() === newPokemon || pokemon.id.toString() === newPokemon);

    if (duplicatePokemon) {
        alert("The Pokemon already exists");
    } else {
        form.current.reset();
        setPokemon(newPokemon);
    }
};

  useEffect(() => {
    async function getPokemon() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const resp = res.data
        addPokemon(resp);
        } catch (e) {
        console.log("no funciona la llamada a la api"); // No pintes nada 
      }
    }
    getPokemon();
  }, [pokemon]);



  return (
    <section className="main">
      <form ref={form} onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="keyword">Pokemon: </label>
          <input type="text" name="keyword" onChange={handleChange} />
        </div>

        {value.keyword ?
          <button type="submit">Search</button> :
          <i>Fill the field</i>
        }

      </form>
    </section>
  )
}
export default Search;

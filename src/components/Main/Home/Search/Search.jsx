import React, { useState, useRef, useEffect } from "react";
import axios from 'axios'

const Search = ({ pokeList,addPokemon }) => {
  const [pokemon, setPokemon] = useState();
  const [value, setValue] = useState();
  const [message, setMessage] = useState('write a pokemon name or id')
  const form = useRef();
  const refTime = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value.toLowerCase();
    setValue(newValue);

    clearTimeout(refTime.current);

    refTime.current = setTimeout(() => {
        console.log(pokeList);
        const duplicatePokemon = pokeList.find((pokemon) => pokemon.name.toLowerCase() === newValue || pokemon.id.toString() === newValue);

        if (duplicatePokemon) {
            setMessage("The Pokemon already exists");
        } else {
            setMessage(""); // Clear any existing messages
            form.current.value = ""
            setPokemon(newValue);
        }      
    }, 2000);
};

  useEffect(() => {
    if (pokemon){
    async function getPokemon() {
      try {
        // Petición HTTP
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const resp = res.data
        addPokemon(resp);
        } catch (e) {
        setMessage("This is not a pokemon name or id"); // No pintes nada 
      }
    }
    getPokemon();
  }}, [pokemon]);



  return (
    <section className="main">
        <div>
          <label  htmlFor="keyword"></label>
          <input ref={form} type="text" name="keyword" placeholder='find your pokemon' onChange={handleChange} />
        </div>
          <i>{message}</i>
    </section>
  )
}
export default Search;

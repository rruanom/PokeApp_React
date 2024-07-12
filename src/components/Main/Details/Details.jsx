import React from 'react';
import { useLocation } from 'react-router-dom';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import openPokeballImage from '../../../assets/pokeball_default.png';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const Details = () => {
  const location = useLocation();
  const pokemon = location.state?.pokemon;

  if (!pokemon) return <div>No hay datos del Pokémon disponibles.</div>;

  const primaryType = pokemon.types[0].type.name;

  const handleImageError = (e) => {
    e.target.src = openPokeballImage;
  };

  const statsData = {
    labels: pokemon.stats.map(stat => stat.stat.name),
    datasets: [
      {
        label: `${pokemon.name} stats`,
        data: pokemon.stats.map(stat => stat.base_stat),
      },
    ],
  };

  const statsOptions = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className={`pokemon-detail type-${primaryType}`}>
      <h2 className="pokemon-name">{pokemon.name}</h2>
      <div className="pokemon-id">ID: {pokemon.id}</div>
      <div className="pokemon-order">Order: {pokemon.order}</div>
      <div className="pokemon-physical">
        <span>Height: {pokemon.height / 10}m</span>
        <span>Weight: {pokemon.weight / 10}kg</span>
      </div>
      
      <div className="pokemon-types">
        <h3>Types:</h3>
        <ul>
          {pokemon.types.map((typeInfo, index) => (
            <li key={index} className={`type type-${typeInfo.type.name}`}>
              {typeInfo.type.name}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="pokemon-stats">
        <h3>Stats:</h3>
        <div className="radar-container">
          <Radar data={statsData} options={statsOptions} />
        </div>
      </div>
      
      <div className="pokemon-sprites">
        <h3>Sprites:</h3>
        <div className="sprite-container">
          <img src={pokemon.sprites.front_default} alt={`${pokemon.name} front`} onError={handleImageError} />
          <img src={pokemon.sprites.back_default} alt={`${pokemon.name} back`} onError={handleImageError} />
        </div>
      </div>
    </div>
  );
};

export default Details;

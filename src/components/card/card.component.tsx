import React from 'react';
import { Card as MonsterCard } from '../../interfaces/card';
import './card.style.css';

export const Card: React.FC<MonsterCard> = props => {
  return (
    <div className="card-container">
      <img 
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} 
        alt="monster"
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  )
}
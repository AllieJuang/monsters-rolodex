import React from 'react';
import './card-list.style.css';
import { Monster } from '../../interfaces/monster';
import { Card } from '../card/card.component'; 

export const CardList: React.FC<{monsters: Monster[]}>  = (props) => {
  return (
    <div className="card-list">
      {
        props.monsters.map(monster => (
          <Card key={ monster.id } monster={monster} />
        ))
      }
    </div>
  )
}
import React, { useEffect, useState } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Monster } from './interfaces/monster';
import './App.css';

const App: React.FC = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState<string>('');
  const [filterMonsters, setFilterMonsters] = useState<Monster[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => setMonsters(res))
  }, []);

  useEffect(() => {
    const filterMonsters: Monster[] = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    setFilterMonsters(filterMonsters);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monsters, searchField])

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder="search monster"
        searchField={searchField}
        handelChange={handleInputChange}
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
}

export default App;

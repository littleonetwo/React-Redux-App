import React from 'react';
import PokemonList from './components/PokeList.js';

import { connect } from 'react-redux';

import './App.css';

function App() {
  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}
export default connect((state) => {
   return {state}})(App);

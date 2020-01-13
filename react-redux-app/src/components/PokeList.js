import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getPokemon } from '../actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const PokemonList = props => {
  // const fetchPokemon = e => {
  //   e.preventDefault();
  //   props.getPokemon();
  // };
  console.log(props);
  const { className, buttonLabel} = props;

  const [modal, setModal] = useState(false);
  const [currentSel, setCurrentSel] = useState("");
  const toggle = (id) => {
    // console.log(id);
    setCurrentSel(id);
    setModal(!modal);


  }
  // let count = 0;
  return (
    <div>

      <h2>Welcome to Pokémon World!</h2>
      <div>
        {props.pokemon.map(pokemon => (
          <div>
            <Button key={pokemon.url} color="info" onClick={()=>toggle(pokemon.name)}>{pokemon.name}</Button>

            <br /><br />
          </div>
        ))}
        <Modal isOpen={modal} toggle={()=>toggle()} className={className}>
          <ModalHeader toggle={()=>toggle()} charCode="x">{currentSel}</ModalHeader>
          <ModalBody>
            info and stuff
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={()=>toggle()}>Got It!</Button>
          </ModalFooter>
        </Modal>
        <Button className="button" color="success" onClick={()=>{props.getPokemon(); console.log('you clicked me')}}>Fetch Pokemon!</Button>
      </div>

      {props.error && <p className="error">{props.error}</p>}

    </div>
  );
};



export default connect((state) => {
   return {pokemon: state.pokemon, error:state.error, isFetching: state.isFetching}},
  { getPokemon:getPokemon })(PokemonList);

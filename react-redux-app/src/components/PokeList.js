import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getPokemon, selectPokemon} from '../actions';
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

    if(!modal){
      props.selectPokemon(id);
      setCurrentSel(id);
      // console.log("select props:", props.curSel)
      // setCurrentSel(props.curSel)
    }
    setModal(!modal);


  }
  // let count = 0;
  return (
    <div>

      <h2>Welcome to Pokémon World!</h2>
      <div>
        {props.pokemon.map(pokemon => (
          <div>
            <Button key={pokemon.url} color="info" onClick={()=>toggle(pokemon)}>{pokemon.name}</Button>

            <br /><br />
          </div>
        ))}
        <Modal isOpen={modal} toggle={()=>toggle()} className={className}>
          <ModalHeader toggle={()=>toggle()} charCode="x">{currentSel.name}</ModalHeader>
          <ModalBody>
            Type:

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
   return {pokemon: state.pokemon, error:state.error, isFetching: state.isFetching, curSel: state.curSel}},
  { getPokemon, selectPokemon })(PokemonList);

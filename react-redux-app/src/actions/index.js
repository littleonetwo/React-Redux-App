import axios from "axios";




export const getPokemon = () => {
  return (dispatch) => {
    dispatch({type: "FETCH_POKEMON_START"});
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then(res => {
        console.log(res);
        dispatch({ type: "FETCH_POKEMON_SUCCESS", payload: res.data.results});
      })
      .catch(err => dispatch({type:"FETCH_POKEMON_FAIL", payload: err}));
  }}

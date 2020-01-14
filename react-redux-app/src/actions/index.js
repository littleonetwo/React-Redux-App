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

export const selectPokemon = (poke) => {
  console.log("poke:", poke)
    return (dispatch) => {
      dispatch({type: "SELECT_POKEMON_START", payload:poke});
      axios
        .get(`${poke.url}`)
        .then(res => {
          dispatch({type: "SELECT_POKEMON_SUCCESS", payload: res.data});
        })
        .catch(err => dispatch({type:"SELECT_POKEMON_FAIL", payload: err} ))
    }
}

// export const getSelPokemonInfo = (poke) => {
//   console.log("poke2:", poke);
//     return(dispatch) => {
//       dispatch({type: "SELECT_POKEMON_GET"})
        // axios
        //   .get(`${poke.url}`)
        //   .then(res => {
        //     dispatch({type: "SELECT_POKEMON_SUCCESS", payload: res.data});
        //   })
        //   .catch(err => dispatch({type:"SELECT_POKEMON_FAIL", payload: err} ))
//       //
//       }
// }

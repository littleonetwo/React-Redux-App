const initialState ={
  isFetching:false,
  pokemon:[],
  error:'',
  hasData: false

}

export const pokeReducer = (state = initialState, action) => {
  console.log("state:", state);
  console.log("action:", action);
  switch (action.type){
    case "FETCH_POKEMON_START":
      return {...state, isFetching: true, error: ''};
    case "FETCH_POKEMON_SUCCESS":
      return {...state, pokemon: action.payload, isFetching:false, error:'', hasData: true }
    case "FETCH_POKEMON_FAIL":
      return {...state, error: action.payload}
    default:
      return state;

  }

}

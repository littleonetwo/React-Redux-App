const initialState ={
  isFetching:false,
  pokemon:[],
  error:'',
  hasData: false,
  curSel:{info: {
     types: ""}}

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
    case "SELECT_POKEMON_START":
      let selection = state.pokemon.filter((pokemon)=>{
        return pokemon.name === action.payload;
      })
      // console.log("selection:", selection);
      return {...state, curSel: selection, isFetching: true};
    case "SELECT_POKEMON_GET":
      return {...state, isFetching: true, error: ''};
    case "SELECT_POKEMON_SUCCESS":
      return {...state, curSel:{...state.curSel, info: action.payload}, isFetching: false};
    case "SELECT_POKEMON_FAIL":
      return {...state, error: action.payload, isFetching: false}
    default:
      return state;

  }

}

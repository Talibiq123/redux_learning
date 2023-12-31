import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import postReducer from "./reducer/postReducer"; 

const store = createStore(postReducer, applyMiddleware(thunk));

export default store;

//  dispatch(postFetching())
// dispatch(postFetchSuccess(response.data))

// middlewear


// function(dispatch){
//     dispatch(postFetching())
//     axios.get("https://gauravgitacc.github.io/postAppData/posts.json")
//     .then((response)=>{
//         dispatch(postFetchSuccess(response.data))
//     })
//     .catch((err)=>{
//             dispatch(postFetchError(err.message))
//     })
// }
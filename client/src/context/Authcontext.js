import { createContext, useContext, useEffect, useReducer } from "react";
import { authReducer } from "../reducers/userReducers";

export const AuthContext = createContext();

// const AuthReducer = (state,action) =>{
//   switch(action.type){
//     case "LOGIN_START":
//       return{
//         user:null,
//         loading:true,
//         error:null,
//       }
//       case "LOGIN_SUCCESS":
//       return{
//         user:action.payload,
//         loading:true,
//         error:null,
//       }
//       case "LOGIN_FAILURE":
//       return{
//         user:null,
//         loading:false,
//         error:action.payload,
//       }
//       case "LOGOUT":
//       return{
//         user:null,
//         loading:false,
//         error:null,
//       }
//       default:
//         return state

//   }
// }
const userFromStorage = localStorage.getItem('auth')?JSON.stringify(localStorage.getItem('auth')):null

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    error: null,
    loading: false,
    user: userFromStorage,
  });
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(state.user));
  // }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const AuthStore = () => {
  return useContext(AuthContext);
};

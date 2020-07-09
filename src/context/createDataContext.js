import React, {useReducer} from 'react';

export default (reducer, actions, initialValue) => {
  const Context = React.createContext();

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    let newActions = {};

    for (let key in actions) {
      //actions is addBlog
      newActions[key] = actions[key](dispatch);
      return (
        <Context.Provider value={{state, ...newActions}}>
          {children}
        </Context.Provider>
      );
    }
  };
  return {Context, Provider};
};

import React, { Component } from "react";
import { createStore } from "redux";

class ReactDemo extends React.Component {
  render() {
    //step 2 : Reducer : state and action
    const reducer = function(state, action) {
      if (action.type === "ATTACK") {
        return action.payload;
      }

      if (action.type === "GATTACK") {
        return action.payload;
      }

      return state; // if there is no attach it will generally return this
    };

    //step 1 store:  a reducer and state
    const store = createStore(reducer, "Peace");

    //step 3: subscribe

    store.subscribe(() => {
      console.log("store is now", store.getState());
    });

    //step 4: Dispatch action

    store.dispatch({ type: "ATTACK", payload: "Iron Man" });
    store.dispatch({ type: "GATTACK", payload: "Hulk Man" });

    return (
      <div>
        <p> From ReduxDemo</p>
      </div>
    );
  }
}

export default ReactDemo;

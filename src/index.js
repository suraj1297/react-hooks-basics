import React from 'react';
import ReactDOM from 'react-dom';
import BasicStates from './BasicStates';
import State2 from "./State2"
import Title from './Title';
import ContextParent from "./ContextParent"

ReactDOM.render(
  <React.StrictMode>
    <BasicStates />
  </React.StrictMode>,
  document.getElementById('root')
);


ReactDOM.render(<State2 />, document.querySelector("#state2"))

ReactDOM.render(<Title />, document.querySelector("#title"))

ReactDOM.render(<ContextParent />, document.querySelector("#context"))


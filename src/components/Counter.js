import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Counter = props => (
  <div>
    <h1>Counter</h1>

    <p>Counter attuale: <strong>{props.count}</strong></p>

        <button className="btn btn-primary btn-sm" onClick={props.incremento}>Incrementa</button>
        <button className="btn btn-primary btn-sm" onClick={props.decremento}>Decrementa</button>
        <br /><br />
        <button className="btn btn-primary btn-sm" onClick={props.moltiplicazione}>Moltiplica x 2</button>
        <button className="btn btn-primary btn-sm" onClick={props.divisione}>Dividi x 2</button>

  </div>
);

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Counter);
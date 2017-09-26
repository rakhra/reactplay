
import React from "react";
import ReactDOM from "react-dom";

import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';
import Paper from 'material-ui/Paper';

import ChipInput from 'material-ui-chip-input';

import IdentifierSelector from './IdentifierSelector'


const style = {
  margin: 20,
  textAlign: 'center'
};

const dataSource2 = ['12345', '23456', '34567'];

function buildComponent() {
  return (<div style={{flexDirection: 'column', display: 'flex', width:'25%'}}>
      <div >
        <Paper style={style} zDepth={1} rounded={false} >
          <AutoComplete
            floatingLabelText="showAllItems"
            filter={AutoComplete.noFilter}
            openOnFocus={true}
            dataSource={dataSource2} />

            <br />
        </Paper>
      </div>
      <div>
        <IdentifierSelector />
        
      </div>
    </div>)
}


export class Filters extends React.Component {
  render() {
    return (buildComponent());
  }
}

export default Filters;


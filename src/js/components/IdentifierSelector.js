import React from "react";
import ReactDOM from "react-dom";

import PropTypes from 'prop-types';
import AutoComplete from 'material-ui/AutoComplete';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';

import ChipInput from 'material-ui-chip-input';

const style = {
  margin: 20,
  textAlign: 'center'
};

const mapStateToProps = (state) => ({
  identifiers: state.identifiers
})


 class IdentifierSelector extends React.Component {

  handleChange(chips) {

  }

  render() {
    console.log(this.props)
    return (<div>
    <Paper style={style} zDepth={1} rounded={false} >
      <AutoComplete dataSource={this.props.identifiers} onUpdateInput={this.handleChange} />
    </Paper>

      <ChipInput
          dataSource={this.props.identifiers}
          onChange={(chips) => this.handleChange(chips)} /></div>
  );
  }
}

IdentifierSelector.propTypes = {
   identifiers : React.PropTypes.array.isRequired
}


// IdentifierSelector.getDefaultProps = {
//     identifiers: []    
// }


export default connect(mapStateToProps)(IdentifierSelector)




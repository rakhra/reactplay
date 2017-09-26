import React from "react";
import ReactDOM from "react-dom";
import ReactJson from 'react-json-view';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});



export class RangeFilter extends React.Component {

   handleChange = name => (event, checked) => {
    
  };
  
  render() {
    const classes = this.props.classes;
    
    let output = (
      <Paper>
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="date"
                label="From Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }} />
      
            <TextField
              id="date"
              label="To Date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }} />

              <FormControlLabel
          control={
            <Checkbox
              checked={false}
              onChange={this.handleChange('checkedA')}
              value="checkedA"/>
              }
              label="Remove Empty Values"/>

        </form>
      </Paper>)

    return output;
  }
}

export default withStyles(styles)(RangeFilter);




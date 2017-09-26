import React from "react";
import ReactDOM from "react-dom";

import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';

import IdsFilter from './IdsFilter';
import FieldFilter from './FieldFilter';

import QueryRenderer from './QueryRenderer';

import RangeFilter from './RangeFilter';

import { withStyles } from 'material-ui/styles';


import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    // padding: 16,
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
});

import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
  identifiers: state.identifiers
})


const queryPayload = {
  "identifiers": [
    {
      "identifier": "Alpha",
      "owner": "AlphaOwner"
    },
    {
      "identifier": "Beta",
      "owner": "BetaOwner"
    },
    {
      "identifier": "Gamma",
      "owner": "GammaOwner"
    }
  ],
  "fields": [
    {
      "identifier": "Alpha",
      "fields": [
        "*",
        "a_field",
        "b_field",
        "c_field"
      ]
    },
    {
      "identifier": "Beta",
      "fields": [
        "*",
        "a_field",
        "b_field"
      ]
    },
    {
      "identifier": "Gamma",
      "fields": [
        "*",
        "a_field"
      ]
    }
  ],
  "timeseries": [
    {
      "identifier": "Alpha",
      "fields": {
        "*": {
          "date": [
            "2017-01-01"
          ],
          "value": [
            1
          ]
        },
        "a_field": {
          "date": [
            "2017-01-02"
          ],
          "value": [
            2
          ]
        },
        "b_field": {
          "date": [
            "2017-01-03"
          ],
          "value": [
            3
          ]
        },
        "c_field": {
          "date": [
            "2017-01-04"
          ],
          "value": [
            4
          ]
        }
      }
    },
    {
      "identifier": "Beta",
      "fields": {
        "*": {
          "date": [
            "2017-01-01"
          ],
          "value": [
            1
          ]
        },
        "a_field": {
          "date": [
            "2017-01-02"
          ],
          "value": [
            2
          ]
        },
        "b_field": {
          "date": [
            "2017-01-03"
          ],
          "value": [
            3
          ]
        }
      }
    },
    {
      "identifier": "Gamma",
      "fields": {
        "*": {
          "date": [
            "2017-01-01"
          ],
          "value": [
            1
          ]
        },
        "a_field": {
          "date": [
            "2017-01-02"
          ],
          "value": [
            2
          ]
        }
      }
    }
  ]
}
 

class App extends React.Component {
  state = {
    selected: [1],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };


  render() {
      const classes = this.props.classes;

    return (
     <div className={classes.root}>
      <Grid container spacing={24}>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={24} direction="column" >
            <RangeFilter />

              <IdsFilter />
            
            
              <FieldFilter />
            
          </Grid>
        </Grid>
        
        <Grid item xs={12} sm={6}>
            <Grid container spacing={24} direction="column" >
              <QueryRenderer queryPayload={queryPayload}/>
            </Grid>
        </Grid>
      </Grid>
    </div>);
  }
}


export default  withStyles(styles)(connect(mapStateToProps)(App))








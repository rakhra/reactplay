import React from "react";
import Home from "./Home";
//import QueryRenderer from "./QueryRenderer";
//import Filters from "./Filters";


import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';

import App from "./App";







const style = {
  margin: 20,
  textAlign: 'center'
};

  

class Layout extends React.Component{
	render(){	
    const classes = this.props.classes;

		return(
			<div>
				 <h1>Basic Calculator</h1>
         

         <hr/>

         <div style={{flexDirection: 'row', display: 'flex', justifyContent : 'space-between'}} >
            
          </div>

          <hr/>


          <App />

			</div>


		);
	}
}


Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

const AppLayout = () => (
 
    <Layout classes={{}} />
 
)



export default AppLayout;



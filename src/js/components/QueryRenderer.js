import React from "react";
import ReactDOM from "react-dom";
import ReactJson from 'react-json-view';
import Paper from 'material-ui/Paper';


const styles = theme => ({


});

export class QueryRenderer extends React.Component {

  

  render() {
      const reactJsonDefaults = {
            theme: 'rjv-default',
            collapsed: false,
            collapseStringsAfter: 40,
            onAdd: false,
            onEdit: false,
            onDelete: false,
            displayObjectSize: false,
            enableClipboard: false,
            indentWidth: 4,
            displayDataTypes: false,
            iconStyle: 'triangle'
        }
    let output = (
      <Paper>
        <ReactJson
          name={false}
          collapsed={reactJsonDefaults.collapsed}
          style={reactJsonDefaults.style}
          theme={reactJsonDefaults.theme}
          src={this.props.queryPayload}
          collapseStringsAfterLength={reactJsonDefaults.collapseStringsAfter}
          
          displayObjectSize={reactJsonDefaults.displayObjectSize}
          enableClipboard={reactJsonDefaults.enableClipboard}
          indentWidth={reactJsonDefaults.indentWidth}
          displayDataTypes={reactJsonDefaults.displayDataTypes}
          iconStyle={reactJsonDefaults.iconStyle} />
      </Paper>
    )

    return output;
  }
}

export default QueryRenderer;
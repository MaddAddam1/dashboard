import React from 'react';

import { connect } from 'react-redux';
import ScriptForm from './ScriptForm';
import { editScript } from '../actions/scripts'

const EditScript = (props) => {
  
    return (
    
        <div>
            <h1 style={{color: "green"}}>Edit Script </h1>
            <h3>Current Script Name: {props.script.ScriptName}</h3>
            <h5>Script Author: {props.script.CreatedBy}</h5>
            <h5>Last modified by <u>{props.script.LastModifiedBy}</u> on {props.script.LastDateModified}</h5>
            
            <ScriptForm
            {...props.script}
            onSubmit={(script) => {
                props.dispatch(editScript(props.script.ScriptID, script));
                props.history.push("/scripts")
                console.log('Script updated: ', script);
            }}
            />
        </div>
    );
}

const mapStateToProps = (state, props) => {

    return {
        script: state.scripts.find((script) => script.ScriptID === props.match.params.ScriptID)
    };
};

export default connect(mapStateToProps)(EditScript);

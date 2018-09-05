import React from 'react';
import ScriptForm from './ScriptForm';
import { connect } from 'react-redux';
import { createScript } from './../actions/scripts';

const AddScript = (props) => (
    <div>
        <h4>Add Script</h4>
        <ScriptForm 
            onSubmit={(script) => {
                props.dispatch(createScript(script));
                props.history.push(`script/${script.ScriptID}`);
                console.log(script);
            }}
        />
    </div>
);

export default connect()(AddScript); 
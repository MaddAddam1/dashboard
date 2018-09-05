import React from 'react';
import { Button } from '@material-ui/core';
import { Link, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeScript, viewScript } from './../actions/scripts';


const Script = ({dispatch, ScriptID, ScriptName, CreatedBy, CreatedDate, ScriptDesc}) => (

    <div>
        <Link to={`script/${ScriptID}`}><h3>{ScriptName}</h3></Link> 
        <h5>Created By: {CreatedBy} ----- Created Date: {CreatedDate}</h5>     
        <p>{ScriptDesc}</p>
        <button onClick={() => {
            dispatch(viewScript({ ScriptID }));
            // this.history.push(`script/${ScriptID}`);
        }}
        >View
        </button>
        <button onClick={() => {
            dispatch(removeScript({ ScriptID }));
        }}
        >Remove
        </button>
    </div>

);

export default connect()(Script);
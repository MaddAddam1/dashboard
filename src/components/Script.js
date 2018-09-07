import React, {PropTypes} from 'react';
import { Button } from '@material-ui/core';
import { Link, Router} from 'react-router-dom';
import { connect } from 'react-redux';
import { removeScript, viewScript, editScript } from './../actions/scripts';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const onClickEdit = (e) => {
        e.preventDefault();
        this.props.history.push("/");
    }
    

const Script = ({props, dispatch, LastDateModified, ScriptID, ScriptName, CreatedBy, CreatedDate, ScriptDesc}) => (


    
    <div>
    
        <Link to={`/scripts/${ScriptID}`} onClick={() => {
            dispatch(viewScript({ ScriptID }));
            
        }}>
        
        <h3>Script Name: {ScriptName}</h3></Link> 
        <h5>Created by <u>{CreatedBy}</u> on {CreatedDate}</h5> 
        <h5>Last Modified on {LastDateModified}</h5>     
        <p>{ScriptDesc}</p>
        <button onClick={() => {
            dispatch(viewScript({ ScriptID }));
      
        }}
        >View
        </button>
        <button onClick={() => {
            dispatch(removeScript({ ScriptID }));
        }}
        >Remove
        </button>


        <button onClick={this.onClickEdit}
        >Edit
        </button>
    </div>

);

export default connect()(Script);
import React from 'react';

import { BrowserRouter, Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ScriptForm from './ScriptForm';
import Script from './Script';




const ViewScript = (props) => {
    console.log(props);

    return (

        <div>
            <h2 style={{color: "red"}}>Viewing Script</h2>
                <Script {...props.script}/>
                <button onClick={() => {
                    props.history.push(`/edit/script/${props.script.ScriptID}`);
                }}>Edit</button>
        </div>

    );
};

const mapStateToProps = (state, props) => {

    return {
        script: state.scripts.find((script) => script.ScriptID === props.match.params.ScriptID)
    };
};

export default connect(mapStateToProps)(ViewScript);
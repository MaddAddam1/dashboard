import React from 'react';
import { Script } from './Script';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';


const ViewScript = (props) => {

    console.log('Here are the props:' + props);

    return (

        <div>
            <Script />
        </div>

    );
};

const mapStateToProps = (state, props) => {

    return {
        script: state.scripts.find((script) => script.ScriptID === props.match.params.ScriptID)
    };

};

export default connect(mapStateToProps)(ViewScript);
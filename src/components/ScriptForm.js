import React from 'react';
import moment from 'moment';
import { Button } from '@material-ui/core';
import uuid from 'uuid';


class ScriptForm extends React.Component {

    state = {
        ScriptID: uuid(),
        ScriptDesc: '',
        ScriptName: '',
        CreatedDate: moment().format('MMMM Do, YYYY : LT')
    };

    onScriptNameChange = (e) => {
        const ScriptName = e.target.value;
        this.setState(() => ({ ScriptName }));
    }

    onScriptDescriptionChange = (e) => {
        const ScriptDesc = e.target.value;
        this.setState(() => ({ ScriptDesc }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.ScriptDesc || !this.state.ScriptName) {
            this.setState(() => ({ error: 'Please prove a Name and the Details of the script'}));
            

        } else {
            this.setState(() => ({ error: ''}))
            console.log('Script created or edited...')
            this.props.onSubmit({
                ScriptID: this.state.ScriptID,
                ScriptName: this.state.ScriptName,
                ScriptDesc: this.state.ScriptDesc,
                CreatedDate: this.state.CreatedDate
            })
        }
    };

    render() {

        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                    type="text"
                    placeholder="Script Name"
                    autoFocus
                    value={this.state.ScriptName}
                    onChange={this.onScriptNameChange}
                    />
                    <textarea
                    placeholder="Script Details"
                    value={this.state.ScriptDesc}
                    onChange={this.onScriptDescriptionChange}
                    />
                    <button>
                    Add Script
                    </button>
                </form>
            </div>

        );
    }
}
export default ScriptForm;
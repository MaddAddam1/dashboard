import React, { Component } from 'react';
import { ReactDOM } from 'react-dom';


class IndecisionApp extends Component{

    render () {

        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends Component {

    render() {

        return (
        
            <div>
                <h1>Indecision</h1>
                <h2>Put your decisions in the hands of a computer</h2>         
            </div>
        );
    }
}

class Action extends Component {

    render() {

        return (
        
            <div>
                <button>What should I do?</button>       
            </div>           
        );
    }
}

class Options extends Component {

    render () {

        return (

            <div>
                <Option />
                <Option />
                <Option />
   
            </div>
        );
    }
}

class Option extends Component {
    render() {
        return (
            <div>
            Sub Option
            </div>
        );
    }
}

class AddOption extends Component {

    render (){

        return (

            <div>
            Add option component here
            </div>
        );
    }
}


export default IndecisionApp;


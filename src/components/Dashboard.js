import React, { Fragment } from 'react';
import ContentBody from './Content';
import {BrowserRouter, Route, Router, Switch, Link, NavLink} from 'react-router-dom';
import MenuAppBar from './AppBar';
import ScriptSteps from './ScriptSteps';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import ScriptsList from './ScriptsList';
import Content from './Content';
import CreateScript from './CreateScript';
import DefaultContent from './DefaultContent';
import {Row, Col, Container} from 'reactstrap';
import ButtonAppBar from './MaterialAppBar';


class Dashboard extends React.Component {

    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    backdropCLickHandler = () => {
        this.setState({sideDrawerOpen: false})
    }

    render() {

        const vert_align = {
            display: 'flex',
            flexDirection: 'column'
        }

        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropCLickHandler}/>;
        }

        return (
            <div style={vert_align}>
            
                 <BrowserRouter>
                    <Fragment>
                        <Container fluid className="vert-align">
                        <MenuAppBar drawerClickHandler={this.drawerToggleClickHandler}/>
                        <SideDrawer show={this.state.sideDrawerOpen}/> 
                        {backdrop}
                        <Route path="/" component={DefaultContent} exact={true}/>
                        
                            <div className="content-body-container">
                                <div>
                                <Route path="/create" component={CreateScript}/>
                                <Route path="/scriptslist" component={ScriptsList}/>
                                </div>
                            </div>
                        </Container>
                    </Fragment>
                </BrowserRouter>
            
                
            </div>
           
            

            
        );
    }
    
};

export default Dashboard;
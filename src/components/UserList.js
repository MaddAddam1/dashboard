import React, { Fragment } from 'react';
import ScriptSteps from './ScriptSteps';

import Typography from '@material-ui/core/Typography';
import { Card, Table, TableCell, TableRow, TableHead, Paper, TableBody, Button } from '@material-ui/core';
// import Button from 'reactstrap/lib/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../styles/base/_settings.scss';

const rows = [{
  id: 1,
  name: "Jesse James",
  scriptstorun: 0,
  lastlogin: "August 12"
}, {
  id: 2,
  name: "Potatoes",
  scriptstorun: 5,
  lastlogin: "August 31"
}, {
  id: 3,
  name: "Grapes",
  scriptstorun: 3,
  lastlogin: "August 25"
}, {
  id: 4,
  name: "Green Pepper",
  scriptstorun: 2,
  lastlogin: "August 9"

}];


class UserList extends React.Component {
    render() {
        return (
            <div>
             <Paper>
                    <Table className="user-data-table">
                        <TableHead component="th">
                        <TableRow component="tr">
                            <TableCell >First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Scripts to Run</TableCell>
                            <TableCell>Last Login</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map(row => {
                            return (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.scriptstorun}</TableCell>
                                <TableCell>{row.lastlogin}</TableCell>
                            
                            </TableRow>
                            );
                        })}
                        </TableBody>
                    </Table>
                                   
                    <Button variant="fab" className="body-card-button-pass" >Pass</Button>
                    <Button variant="fab" className="body-card-button-fail">Fail</Button>
                </Paper>
            </div>
        );
    }
}

export default UserList;
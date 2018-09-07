import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ScriptSteps from './ScriptSteps';
import { Paper, Button, Typography, Card, Input, InputLabel, FormControl, FormHelperText } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../styles/base/_settings.scss';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ReactTable from 'react-table';
import Table from '@material-ui/core/Table';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import scriptsReducer from '../reducers/scripts';
import Script from './Script';



const ScriptsList = (props) => (
    <div>
        <h1 style={{color: "blue"}}>List of Scripts</h1>

        {props.scripts.map((script) => {

        return <Script key={script.ScriptID} {...script}></Script>
        })}

        

    </div>
);

const mapStateToProps = (state) => {
    return {
        scripts: state.scripts
    };
};


export default connect(mapStateToProps)(ScriptsList);


// <Table>
// <TableHead>
//     <TableRow>
//         <TableCell>Script Name</TableCell>
//         <TableCell>Script Author</TableCell>
//         <TableCell>Date Created</TableCell>
//         <TableCell>Script Details</TableCell>
//     </TableRow>
// </TableHead>
// <TableBody>
//     {props.scripts.map((script) => {
// return (
//   <TableRow key={script.ScriptID}>
//     <TableCell component="th" scope="row">
//       {script.ScriptName}
//     </TableCell>
//     <TableCell>{script.CreatedBy}</TableCell>
//     <TableCell>{script.CreatedDate}</TableCell>
//     <TableCell>{scriptsReducer.ScriptDesc}</TableCell>
  
//   </TableRow>
// );
// })}
// </TableBody>
// </Table>

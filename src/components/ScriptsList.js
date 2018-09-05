import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ScriptSteps from './ScriptSteps';
import { Paper, Button, Typography, Card, Input, InputLabel, FormControl, FormHelperText } from '@material-ui/core/';

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
        <h3>List of Scripts</h3>
        {props.scripts.map((script) => {
        return <Script key={script.ScriptID} {...script}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        scripts: state.scripts
    };
};


export default connect(mapStateToProps)(ScriptsList);





// const styles = theme => ({
//     root: {
//       width: "100%",
//       marginTop: theme.spacing.unit * 3,
//       overflowX: "auto"
//     },
//     head: {
//       backgroundColor: "#fff",
//       position: "sticky",
//       top: 0,
//       color: 'red',
//     }
//   });
      
//   const rows = [{
//     id: 1,
//     name: "Jesse James",
//     scriptstorun: 0,
//     lastlogin: "August 12"
// }, {
//     id: 2,
//     name: "Potatoes",
//     scriptstorun: 5,
//     lastlogin: "August 31"
// }, {
//     id: 3,
//     name: "Grapes",
//     scriptstorun: 3,
//     lastlogin: "August 25"
// }, {
//     id: 4,
//     name: "Green Pepper",
//     scriptstorun: 2,
//     lastlogin: "August 9"

// }];
// class ScriptsList extends React.Component {
   
//     render() {

//         const test = (rows) => {
//             console.log(rows);
//         }

//         return (
//             <div >
//                 <Paper>
//                     <Table className="user-data-table">
//                         <TableHead component="th">
//                         <TableRow component="tr">
//                             <TableCell>ID</TableCell>
//                             <TableCell>Name</TableCell>
//                             <TableCell>Scripts to Run</TableCell>
//                             <TableCell>Last Login</TableCell>
//                         </TableRow>
//                         </TableHead>
//                         <TableBody>
//                         {rows.map(row => {
//                             return (
//                             <TableRow key={row.id}>
//                                 <TableCell>{row.id}</TableCell>
//                                 <TableCell>{row.name}</TableCell>
//                                 <TableCell>{row.scriptstorun}</TableCell>
//                                 <TableCell>{row.lastlogin}</TableCell>
                            
//                             </TableRow>
//                             );
//                         })}
//                         </TableBody>
//                     </Table>
                                   
//                     <Button variant="fab" onClick={()=>{console.log(rows)}} className="body-card-button-pass" >Pass</Button>
//                     <Button variant="fab" onClick={console.log(this.props.onCreateScript)} className="body-card-button-fail">Fail</Button>
//                 <InputLabel>Script Name:   </InputLabel>
//                 <Input/>
//                 </Paper>

//             </div>

//         );
//     }
// }
// const newScript = {
//     "ScriptID":"4",
//     "ScriptName":"Mesmerize the People",
//     "LastDateRun":"2018-08-29T02:02:09",
//     "LastDateModified":"1992-06-18T10:34:09",
//     "LastModifiedBy":"Billy Goat",
//     "LastRunBy":"Jim Jones",
//     "CreatedBy":"David Koresh",
//     "ScriptDesc":"Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Amet porttitor eget dolor morbi non. Risus ultricies tristique nulla aliquet enim tortor at auctor. Amet tellus cras adipiscing enim. Senectus et netus et malesuada fames. Mi tempus imperdiet nulla malesuada pellentesque. Pharetra sit amet aliquam id diam maecenas ultricies mi."
// }

//     const mapStateToProps = (state) => {
//     return {
//         create: scriptsReducer.create,
//         edit: scriptsReducer.edit,
//         view: scriptsReducer.view,
//         remove: scriptsReducer.remove
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onCreateScript: () => scriptsReducer.dispatch({type: 'CREATE_SCRIPT'}),
//         onViewScript:  () => dispatch({type: 'VIEW_SCRIPT'}),
//         onEditScript:  () => dispatch({type: 'EDIT_SCRIPT'}),
//         onRemoveScript:  () => dispatch({type: 'REMOVE_SCRIPT'})
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ScriptsList));
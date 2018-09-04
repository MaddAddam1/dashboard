import React, { Fragment } from 'react';
import ScriptSteps from './ScriptSteps';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Badge from 'reactstrap/lib/Badge';
import Button from 'reactstrap/lib/Button';
import ButtonDropdown from 'reactstrap/lib/ButtonDropdown';
import ButtonGroup from 'reactstrap/lib/ButtonGroup';
import ButtonToolbar from 'reactstrap/lib/ButtonToolbar';
import CardBody from 'reactstrap/lib/CardBody';
import Card from 'reactstrap/lib/Card';
import CardFooter from 'reactstrap/lib/CardFooter';
import CardHeader from 'reactstrap/lib/CardHeader';
import CardTitle from 'reactstrap/lib/CardTitle';
import Col from 'reactstrap/lib/Col';
import Dropdown from 'reactstrap/lib/Dropdown';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import Progress from 'reactstrap/lib/Progress';
import Row from 'reactstrap/lib/Row';
// import Table from 'reactstrap/lib/Table';
import Container from 'reactstrap/lib/Container';
// import Button from 'reactstrap/lib/Button';
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


const styles = theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    head: {
      backgroundColor: "#fff",
      position: "sticky",
      top: 0,
      color: 'red',
    }
  });

class ScriptsList extends React.Component {
   
    render() {
        
     const columns = [{
        dataField: 'id',
        text: 'Product ID',
        sort: true
      }, {
        dataField: 'name',
        text: 'Product Name',
        sort: true
      }, {
        dataField: 'price',
        text: 'Product Price',
        sort: true
      }];
      
      const defaultSorted = [{
        dataField: 'name',
        order: 'desc'
      }];
      
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

        return (
            <div >
                <Paper>
                    <Table className="user-data-table">
                        <TableHead component="th">
                        <TableRow component="tr">
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
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

export default withStyles(styles)(ScriptsList);
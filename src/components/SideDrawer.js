import React from 'react';
import AppBar from './AppBar';
import EditScript from './EditScript';
import AddScript from './AddScript';
import CreateScript from './CreateScript';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const SideDrawer = (props) => (

  <nav className="side-drawer">
      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create Script</Link></li>
          <li><Link to="/edit">Edit Script</Link></li>
      </ul>
  </nav>
);

export default SideDrawer;

// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';


// // import { mailFolderListItems, otherMailFolderListItems } from './tileData';

// const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     height: 440,
//     zIndex: 1,
//     overflow: 'hidden',
//     position: 'relative',
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginLeft: 12,
//     marginRight: 36,
//   },
//   hide: {
//     display: 'none',
//   },
//   drawerPaper: {
//     position: 'relative',
//     whiteSpace: 'nowrap',
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerPaperClose: {
//     overflowX: 'hidden',
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     width: theme.spacing.unit * 7,
//     [theme.breakpoints.up('sm')]: {
//       width: theme.spacing.unit * 9,
//     },
//   },
//   toolbar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.default,
//     padding: theme.spacing.unit * 3,
//   },
// });

// class Navigation extends React.Component {
//   state = {
//     open: false,
//   };

//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { classes, theme } = this.props;

//     return (
//       <div className={classes.root}>
//         <AppBar
//           position="absolute"
//           className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
//         >
//           <Toolbar disableGutters={!this.state.open}>
//             <IconButton
//               color="inherit"
//               aria-label="Open drawer"
//               onClick={this.handleDrawerOpen}
//               className={classNames(classes.menuButton, this.state.open && classes.hide)}
//             >
            
//             </IconButton>
//             <Typography variant="title" color="inherit" noWrap>
//               Mini variant drawer
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           variant="permanent"
//           classes={{
//             paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
//           }}
//           open={this.state.open}
//         >
//           <div className={classes.toolbar}>
//             <IconButton onClick={this.handleDrawerClose}>
              
//             </IconButton>
//           </div>
//           <Divider />
//           <List>One</List>
//           <Divider />
//           <List>Two</List>
//         </Drawer>
//         <main className={classes.content}>
//           <div className={classes.toolbar} />
//           <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
//         </main>
//       </div>
//     );
//   }
// }

// Navigation.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// export default withStyles(styles, { withTheme: true })(Navigation);

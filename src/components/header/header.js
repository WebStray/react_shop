import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import HeaderMenu from '../header-menu';

import logo from '../../logo.png'
import './header.css';


const styles = {
  root: {
    flexGrow: 1,
    marginBottom: '10px'
  },
};

const Header = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <img src={logo} alt="" />
          <HeaderMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
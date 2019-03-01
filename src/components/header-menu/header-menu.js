import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

import './header-menu.css';

class HeaderMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'header-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          МЕНЮ
        </Button>
        <Menu
          id="header-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
            <MenuItem onClick={this.handleClose}>
                <Link to="/" className="header-menu-link">На главную</Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
                <Link to="/add-item" className="header-menu-link">Добавить товар</Link>
            </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default HeaderMenu;
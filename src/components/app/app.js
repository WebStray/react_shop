import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddItem from '../add-item';

// components
import Header from '../header';
import ItemsList from '../items-list';

import './app.css';

import data from '../../data.json';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    headerWrap: {
        marginBottom: '10px'
    }
});

class App extends Component {
  state = {
    data: data
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex((el) => el.id === id);

      const newData = [
        ...data.slice(0, idx),
        ...data.slice(idx + 1)
      ];
      return {
        data: newData
      }
    });
  }

  deleteAllItems = () => {
    this.setState(() => {
      const newData = [];
      return {
        data: newData
      }
    });
  }

  addItem = (newItem) => {
     
    newItem.id = this.state.data.length + 1;
    const newData = [...this.state.data, newItem];
    // newData.push(newItem);

    this.setState(() => {
      return {
        data: newData
      }
    });

    localStorage.setItem("data", JSON.stringify(newData));
    //console.log(newData);
  }

  render() {
    const { classes } = this.props;
    return(
      <Router>
          <div className={classes.root}>
              <Header />
              <Route path="/" exact render={() => (
                  <ItemsList 
                    data={this.state.data}
                    onDeleted={this.deleteItem}
                    onDeletedAll={this.deleteAllItems} />
              )} />
              <Route path="/add-item" render={() => (
                  <AddItem onItemAdded={this.addItem}/>
              )} />
          </div> 
      </Router>
    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(App);
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: "column",
      width: "300px",
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    button: {
        margin: theme.spacing.unit,
      },
});

class AddItem extends Component {

    newItemInfo = () => {
        const itemInfo = {};
        itemInfo.category = document.getElementById('item_category').value;
        itemInfo.title = document.getElementById('item_title').value;
        itemInfo.price = parseFloat(document.getElementById('item_price').value);
        itemInfo.imgSrc = document.getElementById('img_src').value;
        itemInfo.description = document.getElementById('item_description').value;
        
        return itemInfo;

    }

    render() {
        const { classes } = this.props;

        return(
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="item_category"
                    label="Category"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                <TextField
                    id="item_title"
                    label="Title"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                <TextField
                    id="item_price"
                    label="price"
                    type="number"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                <TextField
                    id="img_src"
                    label="img src"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                <TextField
                    id="item_description"
                    label="Description"
                    multiline
                    rows="4"
                    // defaultValue="Default Value"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    />
                <Button 
                    variant="contained" 
                    color="primary" 
                    className={classes.button}
                    onClick={() => this.props.onItemAdded(this.newItemInfo())}>
                    {/* onClick={this.newItemInfo}> */}
                    Сохранить
                </Button>
            </form>
        );
    }
}

AddItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(AddItem);
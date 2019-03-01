import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Close from '@material-ui/icons/Close';

const styles = theme => ({
  card: {
    maxWidth: 'auto',
    margin: '5px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

class Item extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  deleteItem = () => {
    console.log(this.props.id);
  }

  render() {
    const { classes, title, imgSrc, description, price, onDeleted } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton onClick={onDeleted}>
              <Close />
            </IconButton>
          }
          title={title}
        />
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title={title}
        />
        <CardContent>
          <Typography component="p">
            <b>Цена: {price}</b>
          </Typography>
          <Typography component="p">
            {description.substr(0, 150) + "..."}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>FULL DESCRIPTION</Typography>
            <Typography paragraph>
              {description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);
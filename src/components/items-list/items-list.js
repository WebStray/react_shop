import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

// components
import Item from '../item';

import './item-list.css';

const ItemsList = ({ data, onDeleted, onDeletedAll }) => {

    const products = data.map((item) => {
        const { id } = item;

        return(
            <Grid key={id} item xs={3}>
                <Item 
                    {...item}
                    onDeleted={ () => onDeleted(id) } />
            </Grid>
        );
    });

    const getTotalInfo = () => {

        if(data.length === 0) {
            return null;
        }

        const info = {};
        info.totalItems = data.length;

        const priceArr = data.map((item) => {
            return item.price;
        });

        info.totalPrice = 0;

        for(let i = 0; i < priceArr.length; i++) {
            info.totalPrice += priceArr[i];
        }

        info.middlePrice = (info.totalPrice / info.totalItems).toFixed(2);

        return(
            <Grid className="block-info" item xs={12}>
                <Paper elevation={1}>
                    <Typography component="p">
                        Всего товаров: {info.totalItems}
                    </Typography>
                    <Typography component="p">
                        Сумма товаров: {info.totalPrice.toFixed(2)}
                    </Typography>
                    <Typography component="p">
                        Средняя цена 1 товара: {info.middlePrice}
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={ () => onDeletedAll() }>
                        Удалить все товары
                        <DeleteIcon />
                    </Button>
                </Paper>
            </Grid>
        );
    }

    return(
        <Grid container>
            { getTotalInfo() } <br/>
            { products }
        </Grid>
    );
}

export default ItemsList;
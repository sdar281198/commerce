import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconBotton} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles';


const Product = ({product, onAddTocart}) =>{
  const classes = useStyles();
  console.log(product);
  return(
    <Card className={classes.root}>
    <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
    <CardContent>
        <div className={classes.CardContent}>
            <Typography variant="h5" gutterbottom>
              {product.name}
            </Typography>
            <Typography variant="h5" gutterbottom>
              {product.price.formatted_with_symbol}
            </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html:product.description}} variant="body2" color="textSecondary"/>
    </CardContent>
    <CardActions disableSpacing className={classes.cardActions}>
        <IconButton arial-label="Add to cart" onClick={() => onAddTocart(product.id, 1)}>
          <AddShoppingCart/>

        </IconButton>
    </CardActions>


    </Card>


  )
}
export default Product;

import { Button, ButtonGroup, Card, CardActions, CardContent, ImageListItem, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import  ProductItem  from './ProductItem';
import { Link } from "react-router-dom";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  const productsStyle = {
    color: 'white',
    padding: '5px',
    display: 'flex',
    marginTop: '100px',
    flexWrap: 'wrap'
  };

  const styles = {
    productsStyle: {
      color: 'white',
      padding: '5px',
      display: 'flex',
      marginTop: '100px',
      flexWrap: 'wrap'
    },
  
    titleProducts: {
      width: '100%',
      textAlign: 'center'
    },
    productItemStyle: {
      width: '32%',
      margin: 'auto',
      textAlign: 'center'
      
    },
    
    button: {
      color: 'white',
      textDecoration: 'none',
      margin: '10px', 
      padding: '5px 25px',
      fontSize: '20px'
      
    }
  }
  
  return (
    <div style={styles.productsStyle}>
      <h1 style={styles.titleProducts}>Productos</h1>


      {products.map((product: any) => {
        return (
          <div key={product.id} style={styles.productItemStyle}>

            <Card sx={{ maxWidth: 345 }} key={product.id}>

              <CardContent>
                <ImageListItem key={product.img}>
                  <img
                    src={`${product.image}`}
                    srcSet={`${product.image}`}
                    alt={product.name}
                    loading="lazy" />
                </ImageListItem>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>


                <p> {product.description}</p>

                <Typography variant="h5" component="h2">
                  $ {product.price}
                </Typography>
                <Typography component="legend">Controlled</Typography>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

              </CardContent>
              <CardActions style={{background: product.color}}>
                
                
                <Link to={`/products/${product.id}`} style={styles.button}>Mas</Link>
                <Link to={`/products/`} style={styles.button}>Comprar</Link>
                
            
                
              </CardActions>
              
            </Card>

          </div>

        );
      })}
    </div>
  )
}

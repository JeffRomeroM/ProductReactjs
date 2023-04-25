import { Button, Card, CardActions, CardContent, ImageListItem, Link, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";

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
  const titleProducts = {
    width: '100%',
    textAlign: 'center'
  };
  const productItemStyle = {
    width: '32%',
    margin: 'auto',
    textAlign: 'center'
    
  };
  const button = {
    width: '100%',
    backgroundColor: 'blue',
    padding: '0'
    
  };
  
  return (
    <div style={productsStyle}>
      <h1 style={titleProducts}>Productos</h1>
      {products.map((product: any) => (
        <div key={product.id} style={productItemStyle}>
   
      <Card sx={{ maxWidth: 345 }} key={product.id}>
      
      <CardContent >
        <ImageListItem key={product.img}>
          <img
            src={`${product.image}`}
            srcSet={`${product.image}`}
            alt={product.name}
            loading="lazy"
          />
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
      <CardActions>
        {/* <Button>Buy Now
          <a href="{"></a>
        <Link to={`/products/${product.id}`}></Link>
        </Button> */}
        <Link to={`/products/${product.id}`} style={button}>
        <Button variant="text">Buy Now</Button>
        </Link>
        {/* <Link to={`/products/${product.id}`}>{product.name}</Link> */}
      </CardActions>
    </Card>

        </div>
        
      ))}
    </div>
  )
}

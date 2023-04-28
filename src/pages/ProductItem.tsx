import { Button, Card, CardActions, CardContent, ImageListItem,  Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import './Slider.css';

const ProductItem = () => {
  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";
  const { id } = useParams();

  const [product, setProduct] = useState({});
 
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }  
    };

    getProduct();
  }, [id]);

 
  //console.log(product.name);
  // console.log({id});
  
  const productsStyle = {
    color: 'white',
    padding: '5px',
    display: 'flex',
    marginTop: '90px',
    flexWrap: 'wrap'
  };
  const titleProduct = {
    width: '100%',
    textAlign: 'center',
    marginTop: '20px',
  };
  const productItemStyle = {
    width: '24%',
    color: 'black',
    margin: 'auto',
    
  };

  //slider
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/450',
    'https://via.placeholder.com/450'
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div style={productsStyle}>
      <h1 style={titleProduct}>Productos</h1>
        <div key={product.id} style={productItemStyle}>
   
      <Card sx={{ maxWidth: 345 }} key={product.id}>
      
      <CardContent >
      <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <img
            key={index}
            className={index === currentImage ? 'active' : ''}
            src={product.image}
            alt="slider"
          />
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={prevImage} disabled={currentImage === 0} className={currentImage === 0 ? 'disabled' : ''}>
          Prev
        </button>
        <button onClick={nextImage} disabled={currentImage === images.length - 1} className={currentImage === images.length - 1 ? 'disabled' : ''}>
          Next
        </button>
      </div>
    </div>
        <Typography gutterBottom variant="h5" component="div">
        {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.description}
     
        </Typography>
        <Typography variant="h2" color="text.secondary"> $ {product.price} </Typography>
        <Typography component="legend">Controlled</Typography>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        
      </CardContent>
      <CardActions>
        <Button variant="contained" style={{background: product.color}}>
          Comprar
        </Button>
      </CardActions>
     
    </Card>
        </div>
        
      
    </div>
  );
};

export default ProductItem;
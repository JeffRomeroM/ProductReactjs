import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = () => {
  return <div>
     <h1>home</h1>
    <Button variant="contained" href={`/products`}>
      Productos
    </Button>
  </div>;
};

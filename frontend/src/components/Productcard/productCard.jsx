import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onDelete }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 345, margin: "auto", my: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹{product.price}
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate(`/update/${product._id}`)}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => onDelete(product._id)}
          >
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

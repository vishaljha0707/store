import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Typography, CircularProgress } from "@mui/material";
import ProductCard from "../Productcard/productCard.jsx"; 

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_URL; // 👈 Using env variable
      console.log(API)
  // 🧠 Fetch data from backend
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/api/products`);

      const data = res.data;

      if (Array.isArray(data.data)) {
        setProducts(data.data);
      } else {
        console.error("Unexpected API response format:", data);
      }
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleUpdate = (product) => {
    console.log("Update", product);
    // navigate or open modal
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/api/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Product Store
      </Typography>

      {loading ? (
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={4}>
          {products.length > 0 ? (
            products.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <ProductCard
                  product={product}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                />
              </Grid>
            ))
          ) : (
            <Typography variant="h6" align="center" sx={{ width: '100%', mt: 4 }}>
              No products found.
            </Typography>
          )}
        </Grid>
      )}
    </Container>
  );
};

export default Home;

import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = ({ mode, setMode }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left - Logo */}
        <Typography
  variant="h6"
  component={Link}
  to="/"
  sx={{
    color: "inherit",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  🛒 Product Store
</Typography>

        {/* Right - Buttons */}
        <div>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            onClick={() => navigate("/create")}
            sx={{ marginRight: 2 }}
          >
            Add Product
          </Button>

          <IconButton
            sx={{ ml: 1 }}
            color="inherit"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

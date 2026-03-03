import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        px: 2,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h1" sx={{ color: "text.primary" }}>
          404
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary", mt: 1, mb: 4 }}>
          Oops! Page not found
        </Typography>
        <MuiLink href="/" sx={{ color: "primary.main", textDecoration: "underline" }}>
          Return to Home
        </MuiLink>
      </Box>
    </Box>
  );
};

export default NotFound;


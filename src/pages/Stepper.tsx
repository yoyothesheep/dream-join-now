import VerticalProgress from "@/components/VerticalProgress";
import { Box, Typography, Button } from "@mui/material";

const Stepper = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        px: 2,
        py: 8,
        overflow: "hidden",
      }}
    >
      {/* Mesh gradient orbs — purple top-left, mint bottom-right */}
      <Box
        aria-hidden="true"
        sx={{
          pointerEvents: "none",
          position: "absolute",
          top: -128,
          left: -128,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "rgba(220, 185, 254, 0.50)",
          filter: "blur(80px)",
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          pointerEvents: "none",
          position: "absolute",
          bottom: -128,
          right: -128,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(187, 247, 208, 0.55)",
          filter: "blur(80px)",
        }}
      />

      <Box sx={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 768, display: "flex", flexDirection: "column", gap: 5 }}>
        {/* Header */}
        <Box>
          <Typography variant="h2" sx={{ color: "text.primary" }}>
            FINDING CAREERS{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              BUILT FOR YOU
            </Box>
          </Typography>
        </Box>

        {/* Main content: single column */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box
            sx={{
              borderRadius: 4,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
              p: 4,
              boxShadow: 1,
            }}
          >
            <VerticalProgress />
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              py: 2,
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "uppercase",
              letterSpacing: 0.5,
              borderRadius: 3,
            }}
          >
            Create your free account now
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", textAlign: "center", color: "text.secondary", lineHeight: 1.6 }}
          >
            Free. No paywalls. We never sell your data.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Stepper;

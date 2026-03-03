import { Box, LinearProgress, Typography } from "@mui/material";

const ProgressBar = ({ value = 50 }: { value?: number }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
      <Box sx={{ flex: 1 }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            height: 10,
            borderRadius: 5,
            bgcolor: "action.disabledBackground",
            "& .MuiLinearProgress-bar": {
              borderRadius: 5,
              background: "var(--gradient-progress, linear-gradient(90deg, #9237ED 0%, #C489FF 100%))",
              transition: "transform 1s ease-out",
            },
          }}
        />
      </Box>
      <Typography variant="body2" sx={{ fontWeight: 500, color: "text.secondary", minWidth: 35 }}>
        {value}%
      </Typography>
    </Box>
  );
};

export default ProgressBar;


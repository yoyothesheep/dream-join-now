import CheckIcon from "@mui/icons-material/Check";
import { Paper, Typography, Box } from "@mui/material";

const benefits = [
  "25 matched careers",
  "Training programs",
  "Clear salary and growth outlook",
  "Funding you may qualify for",
];

const CTACard = () => {
  return (
    <Box sx={{ position: "relative" }}>
      {/* Stack underneath */}
      <Paper
        elevation={0}
        sx={{
          position: "absolute",
          top: 6,
          left: 6,
          width: "100%",
          height: "100%",
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          zIndex: 0,
        }}
      />

      <Paper
        elevation={0}
        sx={{
          position: "relative",
          zIndex: 1,
          p: 4,
          border: "1px solid",
          borderColor: "divider",
          backgroundColor: "background.paper",
          borderRadius: 2,
          minHeight: 280,
        }}
      >
        <Box sx={{ mb: 2.5 }}>
          <Typography variant="h6" sx={{ color: "text.primary" }}>
            <Box component="span" sx={{ mr: 1 }}>
              📦
            </Box>
            YOUR CAREER PACKAGE IS WAITING
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5, fontSize: "15px" }}>
            Sign up now to unlock:
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: "1fr", rowGap: 1.5 }}>
          {benefits.map((b) => (
            <Box key={b} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CheckIcon sx={{ width: 16, height: 16, color: "primary.main", flexShrink: 0 }} />
              <Typography variant="body2" sx={{ color: "text.primary" }}>
                {b}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default CTACard;

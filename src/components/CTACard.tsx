import CheckIcon from "@mui/icons-material/Check";
import { Paper, Typography, Box, Button } from "@mui/material";

const benefits = [
  "25 matched careers",
  "Training programs",
  "Clear salary and growth outlook",
  "Funding you may qualify for",
];

const CTACard = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.paper", // uses MuiPaper default, overridden to borderRadius 16
      }}
    >
      <Box sx={{ mb: 2.5 }}>
        <Typography variant="h6" sx={{ color: "text.primary" }}>
          <Box component="span" sx={{ mr: 1 }}>
            📦
          </Box>
          YOUR CAREER PACKAGE IS READY
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5, fontSize: "15px" }}>
          Sign up now to unlock your personalized career package.
        </Typography>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 3, rowGap: 1.5, mb: 4 }}>
        {benefits.map((b) => (
          <Box key={b} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CheckIcon sx={{ width: 16, height: 16, color: "primary.main", flexShrink: 0 }} />
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              {b}
            </Typography>
          </Box>
        ))}
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
          borderRadius: 3, // slightly more rounded
        }}
      >
        CREATE FREE ACCOUNT
      </Button>

      <Typography
        variant="caption"
        sx={{
          display: "block",
          textAlign: "center",
          color: "text.secondary",
          mt: 2,
          lineHeight: 1.6,
        }}
      >
        Free. No paywalls. We never sell your data.
        <br />
        Confident career decisions, all in one place.
      </Typography>
    </Paper>
  );
};

export default CTACard;


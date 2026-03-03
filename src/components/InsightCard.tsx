import { Paper, Typography, Box } from "@mui/material";

interface InsightCardProps {
  emoji: string;
  title: string;
  description: string;
  active?: boolean;
}

const InsightCard = ({ emoji, title, description, active = false }: InsightCardProps) => {
  return (
    <Paper
      elevation={active ? 3 : 0}
      sx={{
        p: 3,
        border: "1px solid",
        borderColor: active ? "primary.main" : "divider",
        borderLeftWidth: active ? 4 : 1,
        transition: "all 0.3s ease",
        opacity: active ? 1 : 0.5,
        transform: active ? "scale(1)" : "scale(0.95)",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 600,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          mb: 1,
          color: "text.primary",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box component="span" sx={{ mr: 1 }}>
          {emoji}
        </Box>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "15px", lineHeight: 1.6 }}>
        {description}
      </Typography>
    </Paper>
  );
};

export default InsightCard;


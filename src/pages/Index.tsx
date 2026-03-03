import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const experiments = [
  {
    path: "/match-me-results",
    label: "V2 — Match Me Results",
    lastEdit: "Mar 3, 2026",
    description: "Responsive career match cards with carousel navigation on desktop and swipeable cards with a sticky progress bar on mobile.",
    thumbnail: (
      <Box sx={{ width: "100%", height: "100%", p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
        {/* Match count bar */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 0.5 }}>
          <Box sx={{ height: 6, borderRadius: 1, bgcolor: "divider", width: 90 }} />
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <Box sx={{ width: 14, height: 14, borderRadius: "50%", border: "1px solid", borderColor: "divider" }} />
            <Box sx={{ width: 14, height: 14, borderRadius: "50%", border: "1px solid", borderColor: "primary.main" }} />
          </Box>
        </Box>
        {/* Card body: left + right */}
        <Box sx={{ display: "flex", gap: 1, flex: 1, border: "1px solid", borderColor: "divider", borderRadius: 2, overflow: "hidden" }}>
          <Box sx={{ flex: 1, p: 1, display: "flex", flexDirection: "column", gap: 0.75 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <Box sx={{ height: 8, borderRadius: 1, bgcolor: "primary.light", opacity: 0.6, width: "55%" }} />
              <Box sx={{ height: 14, borderRadius: "50px", bgcolor: "primary.main", width: 40 }} />
            </Box>
            <Box sx={{ height: 6, borderRadius: 1, bgcolor: "divider", width: "100%" }} />
            <Box sx={{ height: 6, borderRadius: 1, bgcolor: "divider", width: "80%" }} />
            <Box sx={{ height: 6, borderRadius: 1, bgcolor: "divider", width: "90%" }} />
            <Box sx={{ display: "flex", gap: 0.5, mt: 0.5 }}>
              <Box sx={{ height: 12, borderRadius: "50px", bgcolor: "success.light", width: 50 }} />
              <Box sx={{ height: 12, borderRadius: "50px", bgcolor: "success.light", width: 40 }} />
            </Box>
          </Box>
          <Box sx={{ width: 36, bgcolor: "background.subtle", borderLeft: "1px solid", borderColor: "divider", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ width: 20, height: 32, borderRadius: 0.5, bgcolor: "divider" }} />
          </Box>
        </Box>
      </Box>
    ),
  },
  {
    path: "/finding-careers",
    label: "V2 — Loading Career Results",
    lastEdit: "Mar 3, 2026",
    description: "AI thinking mode animation that streams analysis steps and surfaces insights before revealing results.",
    thumbnail: (
      <Box sx={{ width: "100%", height: "100%", p: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Box sx={{ border: "1px solid", borderColor: "primary.main", borderRadius: 2, overflow: "hidden" }}>
          <Box sx={{ px: 1.5, py: 1, display: "flex", alignItems: "center", gap: 1 }}>
            <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
              <path d="M4 6l6.5 5L4 16" stroke="#9237ED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.5 6l6.5 5-6.5 5" stroke="#9237ED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
            </svg>
            <Box sx={{ height: 7, borderRadius: 1, bgcolor: "divider", width: 120 }} />
          </Box>
          <Box sx={{ borderTop: "1px solid", borderColor: "divider", px: 1.5, py: 1, display: "flex", flexDirection: "column", gap: 0.75 }}>
            <Box sx={{ height: 7, borderRadius: 1, bgcolor: "primary.light", opacity: 0.5, width: "50%" }} />
            <Box sx={{ height: 6, borderRadius: 1, bgcolor: "divider", width: "100%" }} />
            <Box sx={{ height: 6, borderRadius: 1, bgcolor: "divider", width: "70%" }} />
          </Box>
        </Box>
        <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: 2, p: 1.5, display: "flex", flexDirection: "column", gap: 0.75 }}>
          <Box sx={{ height: 7, borderRadius: 1, bgcolor: "divider", width: "55%" }} />
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ height: 6, borderRadius: 1, bgcolor: "divider", width: "40%" }} />
            <Box sx={{ height: 6, borderRadius: 1, bgcolor: "divider", width: "40%" }} />
          </Box>
        </Box>
      </Box>
    ),
  },
  {
    path: "/stepper",
    label: "Stepper — Loading Career Results",
    lastEdit: "Mar 2, 2026",
    description: "Step-by-step reveal of personalized career matches with animated card transitions.",
    thumbnail: (
      <Box sx={{ width: "100%", height: "100%", p: 2, display: "flex", flexDirection: "column", gap: 1.5 }}>
        {[0, 1, 2].map((i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ width: 20, height: 20, borderRadius: "50%", bgcolor: i === 0 ? "primary.main" : "divider", flexShrink: 0 }} />
            <Box sx={{ flex: 1 }}>
              <Box sx={{ height: 8, borderRadius: 1, bgcolor: i === 0 ? "primary.light" : "divider", opacity: i === 0 ? 1 : 0.5, mb: 0.75 }} />
              {i === 0 && <Box sx={{ height: 6, borderRadius: 1, bgcolor: "divider", width: "60%" }} />}
            </Box>
          </Box>
        ))}
        <Box sx={{ mt: 0.5, ml: 4, height: 56, borderRadius: 2, bgcolor: "background.subtle", border: "1px solid", borderColor: "divider" }} />
      </Box>
    ),
  },
];

const Index = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        px: 3,
        py: 6,
      }}
    >
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 0.5 }}>
          altPath
        </Typography>
        <Typography variant="h2" sx={{ color: "text.primary", mb: 5 }}>
          UX Experiment{" "}
          <Box component="span" sx={{ color: "primary.main" }}>
            Gallery
          </Box>
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {experiments.map((exp) => (
            <Box
              key={exp.path}
              component={Link}
              to={exp.path}
              sx={{
                display: "flex",
                gap: 3,
                textDecoration: "none",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: "background.paper",
                transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  boxShadow: "0 4px 20px rgba(146, 55, 237, 0.08)",
                },
              }}
            >
              {/* Thumbnail */}
              <Box
                sx={{
                  width: 220,
                  flexShrink: 0,
                  bgcolor: "background.subtle",
                  borderRight: "1px solid",
                  borderColor: "divider",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {exp.thumbnail}
              </Box>

              {/* Text */}
              <Box sx={{ py: 3, pr: 3, display: "flex", flexDirection: "column", justifyContent: "center", gap: 0.75 }}>
                <Typography variant="h6" sx={{ color: "text.primary" }}>
                  {exp.label}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                  {exp.description}
                </Typography>
                <Typography variant="caption" sx={{ color: "text.disabled", mt: 0.5 }}>
                  Last edited {exp.lastEdit}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Index;

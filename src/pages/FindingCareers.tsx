import { useState, useEffect } from "react";
import { Box, Typography, Button, Skeleton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const THINKING_LINES = [
  "Scanning your quiz responses for career value signals...",
  "Cross-referencing 200+ career pathways for mission-driven alignment...",
  "Analyzing your communication strengths for leadership placements...",
  "Calculating salary growth trajectories for matched roles...",
  "Identifying training programs with available funding...",
  "Compiling your personalized career package...",
];

const HEADER_LABELS = [
  "Scanning quiz responses",
  "Cross-referencing career pathways",
  "Analyzing your strengths",
  "Calculating salary trajectories",
  "Identifying funding options",
  "Compiling your career package",
];

const INSIGHTS = [
  {
    emoji: "🌊",
    title: "What motivates you",
    description:
      "In every trade-off question, you chose impact over income. Your matches skew toward mission-driven roles.",
  },
  {
    emoji: "⚡️",
    title: "Your pace preference",
    description:
      "You thrive in fast-moving environments. Roles with clear milestones and autonomy are your best fit.",
  },
  {
    emoji: "🤝",
    title: "How you work best",
    description:
      "You lean toward collaborative settings. Careers with strong team structures and mentorship came out on top.",
  },
];

const benefits = [
  "25 matched careers",
  "Training programs",
  "Clear salary and growth outlook",
  "Funding you may qualify for",
];

const ThinkingLogo = ({ isThinking }: { isThinking: boolean }) => (
  <Box
    sx={{
      width: 22,
      height: 22,
      flexShrink: 0,
      animation: isThinking ? "logoPulse 1.8s ease-in-out infinite" : "none",
      "@keyframes logoPulse": {
        "0%, 100%": { opacity: 1, filter: "drop-shadow(0 0 0px #9237ED)" },
        "50%": { opacity: 0.65, filter: "drop-shadow(0 0 5px #9237ED)" },
      },
    }}
  >
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6l6.5 5L4 16" stroke="#9237ED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 6l6.5 5-6.5 5" stroke="#9237ED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
    </svg>
  </Box>
);


const FindingCareers = () => {
  const [isDone, setIsDone] = useState(false);
  const [started, setStarted] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // Which insight to show: 0→1→2 as lineIndex advances
  const insightIndex = Math.min(Math.floor(lineIndex / 2), INSIGHTS.length - 1);

  const headerLabel = isDone
    ? "Your Careers Are Ready"
    : !started
      ? "Thinking\u2026"
      : HEADER_LABELS[Math.min(lineIndex, THINKING_LINES.length - 1)];

  // Initial delay before streaming begins
  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Character-by-character streaming
  useEffect(() => {
    if (!started || isDone) return;
    if (lineIndex >= THINKING_LINES.length) {
      const timer = setTimeout(() => {
        setIsDone(true);
      }, 400);
      return () => clearTimeout(timer);
    }

    const line = THINKING_LINES[lineIndex];
    if (charIndex < line.length) {
      const timer = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, 22);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCharIndex(0);
        setLineIndex((l) => l + 1);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [lineIndex, charIndex, isDone, started]);

  return (
    <Box
      sx={{
        bgcolor: "background.subtle",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        px: 2,
        py: 8,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 611, display: "flex", flexDirection: "column", gap: 4 }}>
        {/* Header */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="overline" sx={{ color: "text.primary" }}>
            Analyzing Your Responses
          </Typography>
          <Typography variant="h2" sx={{ color: "text.primary", lineHeight: 1.2 }}>
            Finding Careers{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Built for You
            </Box>
          </Typography>
        </Box>

        {/* Thinking mode */}
        <Box
          sx={{
            border: "1px solid",
            borderColor: isDone ? "divider" : "primary.main",
            borderRadius: 2,
            overflow: "hidden",
            bgcolor: "background.paper",
            transition: "border-color 0.5s ease",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              px: 2,
              py: 1.5,
            }}
          >
            <ThinkingLogo isThinking={!isDone} />
            <Typography variant="body2" sx={{ flex: 1, color: "text.secondary", fontWeight: 400 }}>
              {headerLabel}
            </Typography>
          </Box>

          <Box
            sx={{
              borderTop: "1px solid",
              borderColor: "divider",
              px: 2,
              pt: 1.5,
              pb: 2,
            }}
          >
              <Box sx={{ position: "relative", minHeight: 80 }}>
                {/* Skeleton — shown before streaming starts */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    opacity: started ? 0 : 1,
                    transition: "opacity 0.4s ease",
                    pointerEvents: started ? "none" : "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Skeleton variant="circular" width={14} height={14} />
                    <Skeleton variant="text" width={130} height={14} />
                  </Box>
                  <Skeleton variant="text" width="100%" height={12} />
                  <Skeleton variant="text" width="72%" height={12} />
                </Box>

                {/* Insight cards — shown once streaming starts, hidden when done */}
                {INSIGHTS.map((insight, i) => (
                  <Box
                    key={i}
                    sx={{
                      position: "absolute",
                      top: 0, left: 0, right: 0,
                      opacity: started && !isDone && insightIndex === i ? 1 : 0,
                      transition: "opacity 0.4s ease",
                      pointerEvents: started && !isDone && insightIndex === i ? "auto" : "none",
                    }}
                  >
                    <Typography variant="overline" sx={{ fontWeight: 600, color: "text.primary", display: "block", lineHeight: 2 }}>
                      {insight.emoji} {insight.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                      {insight.description}
                    </Typography>
                  </Box>
                ))}

                {/* Celebratory state — shown when done */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    opacity: isDone ? 1 : 0,
                    transition: "opacity 0.6s ease",
                    pointerEvents: isDone ? "auto" : "none",
                  }}
                >
                  <Typography variant="overline" sx={{ fontWeight: 600, color: "primary.main", display: "block", lineHeight: 2 }}>
                    🎉 25 careers matched
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                    We found roles aligned with your values, strengths, and growth goals — with funding and training paths included.
                  </Typography>
                </Box>
              </Box>
            </Box>
        </Box>

        {/* Match Me Feature Card */}
        <Box
          sx={{
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 4,
            p: 3,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
              ⚡️ You're One Step Away
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Sign up to unlock your personalized career starter pack.
            </Typography>
          </Box>
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 2, rowGap: 1 }}>
            {benefits.map((b) => (
              <Box key={b} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CheckIcon sx={{ width: 16, height: 16, color: "primary.main", flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: "text.primary" }}>
                  {b}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* CTA */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
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
              borderRadius: "6px",
            }}
          >
            Create Free Account
          </Button>
          <Typography
            variant="caption"
            sx={{ textAlign: "center", color: "text.secondary", lineHeight: 1.6 }}
          >
            Free. No paywalls. We never sell your data.
            <br />
            Confident career decisions, all in one place.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FindingCareers;

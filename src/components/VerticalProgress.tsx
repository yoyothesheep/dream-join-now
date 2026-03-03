import { useState, useEffect } from "react";
import { Box, Typography, Skeleton, Fade } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";
import LockIcon from "@mui/icons-material/Lock";
import CTACard from "./CTACard";

interface Step {
  label: string;
  status: "done" | "in-progress" | "not-done";
}

const initialSteps: Step[] = [
  { label: "Tell us what matters", status: "done" },
  { label: "Get personalized matches", status: "in-progress" },
  { label: "Make a plan", status: "not-done" },
];

const stepTitles = [
  "Step 1 - Tell us what matters",
  "Step 2 - Get personalized matches",
  "Step 3 - Make a plan",
];

const statusIcon = (status: Step["status"]) => {
  switch (status) {
    case "done":
      return (
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            bgcolor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <CheckIcon sx={{ width: 16, height: 16, color: "primary.contrastText" }} />
        </Box>
      );
    case "in-progress":
      return (
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            bgcolor: "rgba(146, 55, 237, 0.2)", // primary/20
            border: "2px solid",
            borderColor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <CircularProgress size={16} sx={{ color: "primary.main" }} />
        </Box>
      );
    case "not-done":
      return (
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            bgcolor: "action.disabledBackground",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <LockIcon sx={{ width: 14, height: 14, color: "text.disabled" }} />
        </Box>
      );
  }
};

const VerticalProgress = () => {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [steps, setSteps] = useState<Step[]>(initialSteps);

  useEffect(() => {
    // Phase 0 -> Phase 1
    const phase1Timer = setTimeout(() => {
      setAnimationPhase(1);
    }, 2000);

    // Phase 1 -> Phase 2 (Done)
    const phase2Timer = setTimeout(() => {
      setAnimationPhase(2);
      setSteps((prev) => [
        prev[0],
        { ...prev[1], status: "done" },
        prev[2],
      ]);
    }, 4000);

    return () => {
      clearTimeout(phase1Timer);
      clearTimeout(phase2Timer);
    };
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {steps.map((step, i) => (
        <Box key={step.label} sx={{ display: "flex", alignItems: "stretch", gap: 2 }}>
          {/* Icon column with connector */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {statusIcon(step.status)}
            {i < steps.length - 1 && (
              <Box
                sx={{
                  width: 2,
                  flexGrow: 1,
                  bgcolor: step.status === "done" ? "primary.main" : "divider",
                }}
              />
            )}
          </Box>

          {/* Content column */}
          <Box sx={{ pt: 0.5, pb: 2, flex: 1, minWidth: 0 }}>
            {/* Step Label Content */}
            <Fade in={true}>
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    fontWeight: 600,
                    color:
                      step.status === "done"
                        ? "primary.main"
                        : step.status === "in-progress"
                          ? "text.primary"
                          : "text.disabled",
                  }}
                >
                  {!(i === 1 && animationPhase === 2) ? stepTitles[i] : "Step 2 - Your personalized matches are ready"}
                </Typography>
              </Box>
            </Fade>

            {/* In-progress streaming results preview */}
            {i === 1 && step.status === "in-progress" && animationPhase < 2 && (
              <Fade in={true}>
                <Box sx={{ mt: 1.5, width: "100%", maxWidth: 384, minHeight: 280 }}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      bgcolor: "background.paper",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.5,
                      border: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Skeleton variant="circular" width={16} height={16} />
                      <Skeleton variant="text" width={112} height={14} />
                    </Box>
                    <Skeleton variant="text" width="100%" height={12} />
                    <Skeleton variant="text" width="80%" height={12} />

                    <Fade in={animationPhase === 0} unmountOnExit={false}>
                      <Box sx={{ pt: 1, pb: 1, mt: 1, display: animationPhase === 0 ? 'block' : 'none' }}>
                        <Typography
                          variant="overline"
                          sx={{ fontWeight: 600, color: "text.secondary", display: "block", mb: 0.5 }}
                        >
                          <span style={{ marginRight: 4 }}>🌊</span>
                          What motivates you
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                          You chose impact over income. Your matches skew toward mission-driven roles.
                        </Typography>
                      </Box>
                    </Fade>

                    <Fade in={animationPhase === 1} unmountOnExit={false}>
                      <Box sx={{ pt: 1, pb: 1, mt: 1, display: animationPhase === 1 ? 'block' : 'none' }}>
                        <Typography
                          variant="overline"
                          sx={{ fontWeight: 600, color: "text.secondary", display: "block", mb: 0.5 }}
                        >
                          <span style={{ marginRight: 4 }}>⚡️</span>
                          Putting your skills to use
                        </Typography>
                        <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                          Analyzing your communication strong suits for leadership placements.
                        </Typography>
                      </Box>
                    </Fade>

                    <Box sx={{ pt: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                      <Skeleton variant="text" width={96} height={12} />
                      <Skeleton variant="text" width="100%" height={12} />
                      <Skeleton variant="text" width="60%" height={12} />
                    </Box>
                  </Box>
                </Box>
              </Fade>
            )}

            {/* Final CTA Result replacement */}
            {i === 1 && animationPhase === 2 && (
              <Fade in={animationPhase === 2} timeout={800}>
                <Box sx={{ mt: 1.5, mb: 0, minHeight: 280, maxWidth: 384 }}>
                  <CTACard />
                </Box>
              </Fade>
            )}

          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default VerticalProgress;
import { Box, Typography, Skeleton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";
import LockIcon from "@mui/icons-material/Lock";

interface Step {
  label: string;
  status: "done" | "in-progress" | "not-done";
}

const steps: Step[] = [
  { label: "Tell us what matters", status: "done" },
  { label: "Get personalized matches", status: "in-progress" },
  { label: "Make a plan", status: "not-done" },
];

const stepSubtitles: Record<number, string> = {
  2: "Training and financial support options",
};

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
              Step {i + 1}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: step.status === "not-done" ? "text.disabled" : "text.primary",
              }}
            >
              {step.label}
            </Typography>
            {stepSubtitles[i] && (
              <Typography variant="caption" sx={{ color: "text.secondary", mt: 0.5 }}>
                {stepSubtitles[i]}
              </Typography>
            )}

            {/* Streaming results preview beneath step 2 */}
            {step.status === "in-progress" && (
              <Box sx={{ mt: 1.5, width: "100%", maxWidth: 384 }}>
                <Box
                  sx={{
                    borderRadius: 2,
                    bgcolor: "background.paper",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Skeleton variant="circular" width={16} height={16} />
                    <Skeleton variant="text" width={112} height={14} />
                  </Box>
                  <Skeleton variant="text" width="100%" height={12} />
                  <Skeleton variant="text" width="80%" height={12} />

                  <Box sx={{ pt: 1, borderTop: 1, borderColor: "divider", mt: 1 }}>
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

                  <Box sx={{ pt: 1, borderTop: 1, borderColor: "divider", display: "flex", flexDirection: "column", gap: 1 }}>
                    <Skeleton variant="text" width={96} height={12} />
                    <Skeleton variant="text" width="100%" height={12} />
                    <Skeleton variant="text" width="60%" height={12} />
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default VerticalProgress;
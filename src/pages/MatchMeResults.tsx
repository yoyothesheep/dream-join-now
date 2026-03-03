import { useState, useEffect, useRef } from "react";
import {
  Box,
  Collapse,
  Typography,
  Button,
  Chip,
  IconButton,
  LinearProgress,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const VIDEO_THUMBNAIL =
  "https://www.figma.com/api/mcp/asset/3d3aaa8d-8356-4760-8d53-bcd8d046d06c";

const CAREERS = [
  {
    title: "Construction Laborer",
    badge: "Great Match",
    salary: "$113k Median Salary",
    growth: "3% Job Growth",
    whyFits:
      "Construction work is a great fit if you enjoy hands-on problem-solving, teamwork, and applying technical skills.",
    whatYouDo: [
      "Ideal for those who enjoy hands-on work and building the world around them.",
      "Essential role in shaping infrastructure and supporting construction projects.",
      "Operate diverse tools and equipment, ensuring dynamic and varied tasks daily.",
    ],
    videoHandle: "@jemmaclicks",
  },
  {
    title: "Electrician",
    badge: "Strong Match",
    salary: "$98k Median Salary",
    growth: "11% Job Growth",
    whyFits:
      "Your technical aptitude and attention to detail are strong indicators of success as an Electrician.",
    whatYouDo: [
      "Install, maintain, and repair electrical systems in homes and businesses.",
      "Read and interpret technical blueprints and wiring diagrams.",
      "Troubleshoot electrical faults and ensure code compliance.",
    ],
    videoHandle: "@trades.life",
  },
  {
    title: "HVAC Technician",
    badge: "Good Match",
    salary: "$57k Median Salary",
    growth: "6% Job Growth",
    whyFits:
      "HVAC work suits people who enjoy hands-on problem solving and working directly with clients.",
    whatYouDo: [
      "Install and service heating, ventilation, and air conditioning systems.",
      "Diagnose mechanical and electrical problems and apply solutions.",
      "Work across residential, commercial, and industrial settings.",
    ],
    videoHandle: "@hvacpro",
  },
];

const TOTAL = 25;

const MobileCareerCard = ({
  career,
}: {
  career: (typeof CAREERS)[0];
}) => {
  const [readMore, setReadMore] = useState(false);
  const [videoExpanded, setVideoExpanded] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        flexShrink: 0,
        width: "calc(100vw - 68px)",
        maxWidth: 360,
        bgcolor: "background.paper",
        borderRadius: "16px",
        boxShadow:
          "0px 1px 8px rgba(0,0,0,0.12), 0px 3px 4px rgba(0,0,0,0.14), 0px 3px 3px -2px rgba(0,0,0,0.2)",
        px: 2,
        py: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2.25,
      }}
    >
      {/* Badge + title + salary chips */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Chip
          label={career.badge}
          color="primary"
          size="small"
          sx={{ alignSelf: "flex-start" }}
        />
        <Typography variant="h5" sx={{ color: "text.primary" }}>
          {career.title}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Chip label={`💰 ${career.salary}`} color="success" size="small" />
          <Chip label={`📈 ${career.growth}`} color="success" size="small" />
        </Box>
      </Box>

      {/* Why this fits you */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="overline" sx={{ color: "text.primary", letterSpacing: "1px" }}>
          Why this fits you
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.4 }}>
          {career.whyFits}
        </Typography>
      </Box>

      {/* What you'll do */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="overline" sx={{ color: "text.primary", letterSpacing: "1px" }}>
          {"What you'll do"}
        </Typography>
        <Box component="ul" sx={{ m: 0, pl: 3 }}>
          {(readMore ? career.whatYouDo : career.whatYouDo.slice(0, 1)).map((item, i) => (
            <Box component="li" key={i}>
              <Typography
                component="span"
                variant="body1"
                sx={{ color: "text.secondary", lineHeight: 1.4 }}
              >
                {item}
              </Typography>
              {!readMore && i === 0 && (
                <Typography
                  component="span"
                  variant="body1"
                  onClick={() => setReadMore(true)}
                  sx={{
                    color: "text.secondary",
                    textDecoration: "underline",
                    cursor: "pointer",
                    ml: 0.5,
                    lineHeight: 1.4,
                  }}
                >
                  Read More
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Video accordion */}
      <Accordion
        expanded={videoExpanded}
        onChange={() => setVideoExpanded((v) => !v)}
        elevation={0}
        disableGutters
        sx={{ "&:before": { display: "none" }, mx: -2 }}
      >
        <AccordionSummary
          expandIcon={<KeyboardArrowDownIcon />}
          sx={{ px: 2, minHeight: 48, "& .MuiAccordionSummary-content": { my: 1.5 } }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0457 3.58156C12.2006 3.58156 11.4221 3.2897 10.8064 2.80253C10.1042 2.24997 9.61441 1.45706 9.45194 0.548828H7.05469V10.9631C7.05469 12.0907 6.13984 13.0056 5.01227 13.0056C3.8847 13.0056 2.96984 12.0907 2.96984 10.9631C2.96984 9.83553 3.8847 8.92069 5.01227 8.92069C5.23422 8.92069 5.44781 8.95603 5.64797 9.01891V6.56634C5.44094 6.53969 5.22969 6.52444 5.01227 6.52444C2.56406 6.52444 0.572266 8.51591 0.572266 10.9641C0.572266 13.4123 2.56406 15.4041 5.01227 15.4041C7.46047 15.4041 9.45194 13.4123 9.45194 10.9641V5.66166C10.3697 6.33009 11.4952 6.72694 12.7127 6.72694H13.1875V4.33034C13.1402 4.33034 13.0916 4.33034 13.0457 3.58156Z" fill="#010101" />
              <path d="M12.7127 4.33034V6.72694C11.4952 6.72694 10.3697 6.33009 9.45194 5.66166V10.9641C9.45194 13.4123 7.46047 15.4041 5.01227 15.4041C2.56406 15.4041 0.572266 13.4123 0.572266 10.9641C0.572266 8.51591 2.56406 6.52444 5.01227 6.52444C5.22969 6.52444 5.44094 6.53969 5.64797 6.56634V9.01891C5.44781 8.95603 5.23422 8.92069 5.01227 8.92069C3.8847 8.92069 2.96984 9.83553 2.96984 10.9631C2.96984 12.0907 3.8847 13.0056 5.01227 13.0056C6.13984 13.0056 7.05469 12.0907 7.05469 10.9631V0.548828H9.45194C9.61441 1.45706 10.1042 2.24997 10.8064 2.80253C11.4221 3.2897 12.2006 3.58156 13.0457 3.58156L12.7127 4.33034Z" fill="#EE1D52" />
              <path d="M9.45194 5.66166C10.3697 6.33009 11.4952 6.72694 12.7127 6.72694V4.33034C12.0105 4.33034 11.3604 4.10969 10.8064 3.73691C10.1042 3.18434 9.61441 2.39144 9.45194 1.48319V0.548828H7.05469V10.9631C7.05469 12.0907 6.13984 13.0056 5.01227 13.0056C3.8847 13.0056 2.96984 12.0907 2.96984 10.9631C2.96984 9.83553 3.8847 8.92069 5.01227 8.92069C5.23422 8.92069 5.44781 8.95603 5.64797 9.01891V6.56634C5.44094 6.53969 5.22969 6.52444 5.01227 6.52444C2.56406 6.52444 0.572266 8.51591 0.572266 10.9641C0.572266 13.4123 2.56406 15.4041 5.01227 15.4041C7.46047 15.4041 9.45194 13.4123 9.45194 10.9641V5.66166Z" fill="#69C9D0" />
            </svg>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Watch a real day in the life
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 2, py: 2 }}>
          <Box
            sx={{
              position: "relative",
              width: 200,
              height: 240,
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={VIDEO_THUMBNAIL}
              alt=""
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "rgba(0,0,0,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton sx={{ bgcolor: "primary.main", "&:hover": { bgcolor: "primary.dark" } }}>
                <PlayArrowIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
          <Typography variant="caption" sx={{ color: "text.secondary", mt: 1, display: "block" }}>
            {career.videoHandle}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

type CardStatus = "saved" | "dismissed" | null;

const MatchMeResults = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [mobileCardIndex, setMobileCardIndex] = useState(0);
  const [cardStatuses, setCardStatuses] = useState<Record<number, CardStatus>>({});
  const [headerCollapsed, setHeaderCollapsed] = useState(false);
  const [stripDragOffset, setStripDragOffset] = useState(0);
  const stripDragStart = useRef(0);
  const MOBILE_THRESHOLD = 80;
  const [inlineCtasState, setInlineCtasState] = useState<"below" | "visible" | "above">("below");
  const inlineCtasRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const career = CAREERS[currentCard % CAREERS.length];
  const progress = ((currentCard + 1) / TOTAL) * 100;

  const desktopCareerIdx = currentCard % CAREERS.length;

  const toggleStatus = (idx: number, action: "saved" | "dismissed") => {
    setCardStatuses((s) => ({ ...s, [idx]: s[idx] === action ? null : action }));
  };

  const handleMobileNext = () => setMobileCardIndex((i) => Math.min(i + 1, CAREERS.length - 1));
  const handleMobilePrev = () => setMobileCardIndex((i) => Math.max(i - 1, 0));

  const onStripTouchStart = (e: React.TouchEvent) => {
    stripDragStart.current = e.touches[0].clientX;
  };
  const onStripTouchMove = (e: React.TouchEvent) => {
    setStripDragOffset(e.touches[0].clientX - stripDragStart.current);
  };
  const onStripTouchEnd = () => {
    if (stripDragOffset < -MOBILE_THRESHOLD) handleMobileNext();
    else if (stripDragOffset > MOBILE_THRESHOLD) handleMobilePrev();
    setStripDragOffset(0);
  };

  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => setHeaderCollapsed(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const el = inlineCtasRef.current;
    if (!el || !isMobile) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInlineCtasState("visible");
        } else {
          setInlineCtasState(entry.boundingClientRect.top < 0 ? "above" : "below");
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", pb: { xs: 10, md: 0 } }}>

      {/* ── Desktop Nav ──────────────────────────────────────────────── */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "sticky",
          top: 0,
          zIndex: 10,
          bgcolor: "background.default",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box sx={{ height: 72, display: "flex", alignItems: "center", justifyContent: "center", px: 3 }}>
          <Box sx={{ width: "100%", maxWidth: 1280, display: "flex", alignItems: "center", px: 1 }}>
            <Box sx={{ flex: "0 0 auto", p: 1 }}>
              <Typography variant="h6" sx={{ color: "text.primary" }}>altPath</Typography>
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", gap: 2 }}>
              {["Match Me Quiz", "Discover Careers", "Find Training", "altAid Funding"].map((label, i) => (
                <Button
                  key={label}
                  variant="text"
                  sx={{
                    color: "text.secondary",
                    px: "11px",
                    py: "8px",
                    borderBottom: i === 2 ? "3px solid" : "none",
                    borderColor: "secondary.main",
                    borderRadius: i === 2 ? 0 : 1,
                    pb: i === 2 ? 0 : undefined,
                  }}
                >
                  {label}
                </Button>
              ))}
            </Box>
            <Box sx={{ flex: "0 0 auto", display: "flex", gap: 1, p: 1 }}>
              <Button variant="outlined" color="primary" size="small">Log In</Button>
              <Button variant="contained" color="primary" size="small">Sign Up</Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── Mobile Header ────────────────────────────────────────────── */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        {/* Hamburger row */}
        <Box sx={{ height: 64, display: "flex", alignItems: "center", justifyContent: "flex-end", px: 1 }}>
          <IconButton size="large"><MenuIcon /></IconButton>
        </Box>

        {/* Title + subtitle — collapses after scroll */}
        <Collapse in={!headerCollapsed} timeout={350}>
          <Box sx={{ px: 2, pb: 3 }}>
            <Typography variant="h4" sx={{ color: "text.primary", textAlign: "center", mb: 1 }}>
              Your Personalized Matches
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", textAlign: "center" }}>
              Here are 25 real careers we think you'll love
            </Typography>
          </Box>
        </Collapse>

        {/* Sticky match count + progress */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            bgcolor: "background.default",
            px: 4,
            pt: 1.5,
            pb: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 4,
              borderRadius: 2,
              bgcolor: "rgba(146,55,237,0.15)",
              "& .MuiLinearProgress-bar": { borderRadius: 2 },
            }}
          />
        </Box>
      </Box>

      {/* ── Desktop Page Header ───────────────────────────────────────── */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          pt: 15,
          pb: 3,
          px: 3,
          gap: 1,
        }}
      >
        <Typography variant="h4" sx={{ color: "text.primary", textAlign: "center" }}>
          Your Personalized Career Matches
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", textAlign: "center" }}>
          Everything you told us, translated into real careers we think you'll love
        </Typography>
      </Box>

      {/* ── Desktop Card Container ────────────────────────────────────── */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          px: 3,
          pb: 10,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 944,
            borderRadius: "16px",
            boxShadow:
              "0px 1px 5px rgba(0,0,0,0.12), 0px 2px 2px rgba(0,0,0,0.14), 0px 3px 1px rgba(0,0,0,0.2)",
            overflow: "hidden",
          }}
        >
          {/* Match count + carousel toggles */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 4,
              py: 2.25,
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="overline" sx={{ letterSpacing: "1px", fontSize: 12 }}>
              matches viewed:{" "}
              <Box component="span" sx={{ color: "primary.main" }}>{currentCard + 1}</Box>
              {" of "}
              <Box component="span" sx={{ color: "primary.main" }}>{TOTAL}</Box>
            </Typography>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <IconButton
                size="small"
                onClick={() => setCurrentCard((c) => Math.max(0, c - 1))}
                disabled={currentCard === 0}
                sx={{ border: "1px solid rgba(35,37,85,0.5)", p: "5px" }}
              >
                <ChevronLeftIcon sx={{ fontSize: 24 }} />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => setCurrentCard((c) => Math.min(TOTAL - 1, c + 1))}
                disabled={currentCard === TOTAL - 1}
                sx={{ border: "1px solid", borderColor: "primary.main", p: "5px" }}
              >
                <ChevronRightIcon sx={{ fontSize: 24, color: "primary.main" }} />
              </IconButton>
            </Box>
          </Box>

          <Divider />

          {/* Card body: left details + right video */}
          <Box sx={{ display: "flex", bgcolor: "background.paper" }}>
            {/* Left panel */}
            <Box
              sx={{
                flex: 1,
                p: 4,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                position: "relative",
                minWidth: 0,
              }}
            >
              <Chip
                label={career.badge}
                color="primary"
                size="small"
                sx={{ position: "absolute", top: 32, right: 32 }}
              />

              <Typography variant="h5" sx={{ color: "text.primary" }}>
                {career.title}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="overline" sx={{ color: "text.primary", letterSpacing: "1px" }}>
                  Why this fits you
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.4 }}>
                  {career.whyFits}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="overline" sx={{ color: "text.primary", letterSpacing: "1px" }}>
                  {"What you'll do"}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 3 }}>
                  {career.whatYouDo.map((item, i) => (
                    <Box component="li" key={i}>
                      <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.4 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Divider />

              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                <Chip label={`💰 ${career.salary}`} color="success" />
                <Chip label={`📈 ${career.growth}`} color="success" />
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  color={cardStatuses[desktopCareerIdx] === "saved" ? "success" : "primary"}
                  fullWidth
                  startIcon={cardStatuses[desktopCareerIdx] === "saved" ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  onClick={() => toggleStatus(desktopCareerIdx, "saved")}
                  sx={{ textTransform: "uppercase" }}
                >
                  {cardStatuses[desktopCareerIdx] === "saved" ? "Saved" : "Save"}
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<CloseIcon />}
                  onClick={() => toggleStatus(desktopCareerIdx, "dismissed")}
                  sx={{
                    textTransform: "uppercase",
                    color: cardStatuses[desktopCareerIdx] === "dismissed" ? "error.main" : "#454771",
                    borderColor: cardStatuses[desktopCareerIdx] === "dismissed" ? "error.main" : "rgba(35,37,85,0.5)",
                    "&:hover": { borderColor: cardStatuses[desktopCareerIdx] === "dismissed" ? "error.main" : "#454771", bgcolor: "transparent" },
                  }}
                >
                  Not for me
                </Button>
              </Box>
            </Box>

            <Divider orientation="vertical" flexItem />

            {/* Right: video panel */}
            <Box
              sx={{
                width: 248,
                flexShrink: 0,
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0457 3.58156C12.2006 3.58156 11.4221 3.2897 10.8064 2.80253C10.1042 2.24997 9.61441 1.45706 9.45194 0.548828H7.05469V10.9631C7.05469 12.0907 6.13984 13.0056 5.01227 13.0056C3.8847 13.0056 2.96984 12.0907 2.96984 10.9631C2.96984 9.83553 3.8847 8.92069 5.01227 8.92069C5.23422 8.92069 5.44781 8.95603 5.64797 9.01891V6.56634C5.44094 6.53969 5.22969 6.52444 5.01227 6.52444C2.56406 6.52444 0.572266 8.51591 0.572266 10.9641C0.572266 13.4123 2.56406 15.4041 5.01227 15.4041C7.46047 15.4041 9.45194 13.4123 9.45194 10.9641V5.66166C10.3697 6.33009 11.4952 6.72694 12.7127 6.72694H13.1875V4.33034C13.1402 4.33034 13.0916 4.33034 13.0457 3.58156Z" fill="#010101" />
                  <path d="M12.7127 4.33034V6.72694C11.4952 6.72694 10.3697 6.33009 9.45194 5.66166V10.9641C9.45194 13.4123 7.46047 15.4041 5.01227 15.4041C2.56406 15.4041 0.572266 13.4123 0.572266 10.9641C0.572266 8.51591 2.56406 6.52444 5.01227 6.52444C5.22969 6.52444 5.44094 6.53969 5.64797 6.56634V9.01891C5.44781 8.95603 5.23422 8.92069 5.01227 8.92069C3.8847 8.92069 2.96984 9.83553 2.96984 10.9631C2.96984 12.0907 3.8847 13.0056 5.01227 13.0056C6.13984 13.0056 7.05469 12.0907 7.05469 10.9631V0.548828H9.45194C9.61441 1.45706 10.1042 2.24997 10.8064 2.80253C11.4221 3.2897 12.2006 3.58156 13.0457 3.58156L12.7127 4.33034Z" fill="#EE1D52" />
                  <path d="M9.45194 5.66166C10.3697 6.33009 11.4952 6.72694 12.7127 6.72694V4.33034C12.0105 4.33034 11.3604 4.10969 10.8064 3.73691C10.1042 3.18434 9.61441 2.39144 9.45194 1.48319V0.548828H7.05469V10.9631C7.05469 12.0907 6.13984 13.0056 5.01227 13.0056C3.8847 13.0056 2.96984 12.0907 2.96984 10.9631C2.96984 9.83553 3.8847 8.92069 5.01227 8.92069C5.23422 8.92069 5.44781 8.95603 5.64797 9.01891V6.56634C5.44094 6.53969 5.22969 6.52444 5.01227 6.52444C2.56406 6.52444 0.572266 8.51591 0.572266 10.9641C0.572266 13.4123 2.56406 15.4041 5.01227 15.4041C7.46047 15.4041 9.45194 13.4123 9.45194 10.9641V5.66166Z" fill="#69C9D0" />
                </svg>
                <Typography variant="subtitle2" sx={{ color: "text.secondary", fontWeight: 500 }}>
                  Watch a real day in the life
                </Typography>
              </Box>
              <Box
                sx={{
                  position: "relative",
                  width: 200,
                  height: 351,
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={VIDEO_THUMBNAIL}
                  alt=""
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.2)" }} />
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "primary.main",
                    "&:hover": { bgcolor: "primary.dark" },
                    boxShadow:
                      "0px 1px 8px rgba(0,0,0,0.12), 0px 3px 4px rgba(0,0,0,0.14), 0px 3px 3px -2px rgba(0,0,0,0.2)",
                  }}
                >
                  <PlayArrowIcon sx={{ color: "white" }} />
                </IconButton>
              </Box>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {career.videoHandle}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* ── Mobile Card Slideshow ─────────────────────────────────────── */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          overflow: "hidden",
          px: 2,
          py: 2,
        }}
      >
        <Box
          onTouchStart={onStripTouchStart}
          onTouchMove={onStripTouchMove}
          onTouchEnd={onStripTouchEnd}
          sx={{
            display: "flex",
            gap: "12px",
            transform: `translateX(calc(-${mobileCardIndex} * (100vw - 56px) + ${stripDragOffset}px))`,
            transition: stripDragOffset !== 0 ? "none" : "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            touchAction: "pan-y",
            userSelect: "none",
            willChange: "transform",
          }}
        >
          {CAREERS.map((c, i) => (
            <MobileCareerCard key={i} career={c} />
          ))}
        </Box>
      </Box>

      {/* ── Mobile Inline CTAs (fades in when scrolled into view) ─────── */}
      <Box
        ref={inlineCtasRef}
        sx={{
          display: { xs: "flex", md: "none" },
          px: 1,
          pt: 0,
          pb: 2,
          gap: 2,
          opacity: inlineCtasState !== "below" ? 1 : 0,
          pointerEvents: inlineCtasState !== "below" ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      >
        <Button
          variant="contained"
          color={cardStatuses[mobileCardIndex] === "saved" ? "success" : "primary"}
          fullWidth
          startIcon={cardStatuses[mobileCardIndex] === "saved" ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          onClick={() => toggleStatus(mobileCardIndex, "saved")}
          sx={{ textTransform: "uppercase" }}
        >
          {cardStatuses[mobileCardIndex] === "saved" ? "Saved" : "Save"}
        </Button>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<CloseIcon />}
          onClick={() => toggleStatus(mobileCardIndex, "dismissed")}
          sx={{
            textTransform: "uppercase",
            color: cardStatuses[mobileCardIndex] === "dismissed" ? "error.main" : "#454771",
            borderColor: cardStatuses[mobileCardIndex] === "dismissed" ? "error.main" : "rgba(35,37,85,0.5)",
            "&:hover": { borderColor: cardStatuses[mobileCardIndex] === "dismissed" ? "error.main" : "#454771", bgcolor: "transparent" },
          }}
        >
          Not for me
        </Button>
      </Box>

      {/* ── "Explore Beyond" Section ──────────────────────────────────── */}
      <Box
        sx={{
          bgcolor: "background.subtle",
          py: 10,
          px: { xs: 3, md: 13 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, maxWidth: 480, textAlign: "center" }}>
          <Typography variant="h5" sx={{ color: "text.primary", textAlign: "center" }}>
            Want to explore beyond your top matches?
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", textAlign: "center" }}>
            Browse all careers or dive deeper into your personalized profile
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 2 }}>
          <Button variant="contained" color="info" sx={{ textTransform: "uppercase" }}>
            Discover Careers
          </Button>
          <Button variant="contained" color="info" sx={{ textTransform: "uppercase" }}>
            See My Career Profile
          </Button>
        </Box>
      </Box>

      {/* ── Mobile Anchored CTAs (fixed, fades out once inline CTAs come into view) ── */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          px: 1,
          pt: 5,
          pb: 2,
          gap: 2,
          background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, white 40%)",
          zIndex: 100,
          opacity: inlineCtasState === "below" ? 1 : 0,
          pointerEvents: inlineCtasState === "below" ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      >
        <Button
          variant="contained"
          color={cardStatuses[mobileCardIndex] === "saved" ? "success" : "primary"}
          fullWidth
          startIcon={cardStatuses[mobileCardIndex] === "saved" ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          onClick={() => toggleStatus(mobileCardIndex, "saved")}
          sx={{ textTransform: "uppercase" }}
        >
          {cardStatuses[mobileCardIndex] === "saved" ? "Saved" : "Save"}
        </Button>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<CloseIcon />}
          onClick={() => toggleStatus(mobileCardIndex, "dismissed")}
          sx={{
            textTransform: "uppercase",
            color: cardStatuses[mobileCardIndex] === "dismissed" ? "error.main" : "#454771",
            borderColor: cardStatuses[mobileCardIndex] === "dismissed" ? "error.main" : "rgba(35,37,85,0.5)",
            "&:hover": { borderColor: cardStatuses[mobileCardIndex] === "dismissed" ? "error.main" : "#454771", bgcolor: "transparent" },
          }}
        >
          Not for me
        </Button>
      </Box>
    </Box>
  );
};

export default MatchMeResults;

import { useState, useEffect, useCallback } from "react";

const insights = [
  { emoji: "🌊", title: "What motivates you", text: "In every trade-off question, you chose impact over income. Your matches skew toward mission-driven roles." },
  { emoji: "🧠", title: "How you think", text: "You gravitate toward big-picture strategy over day-to-day details. We're prioritizing roles with creative latitude." },
  { emoji: "🤝", title: "Your work style", text: "You prefer collaborative environments with autonomy. We're filtering for team cultures that match." },
  { emoji: "📈", title: "Your growth pattern", text: "You value learning over stability. We're surfacing fast-growth industries where that pays off." },
];

const AnalysisPage = () => {
  const [progress, setProgress] = useState(0);
  const [insightIndex, setInsightIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Animate progress bar
  useEffect(() => {
    const timer = setTimeout(() => setProgress(50), 100);
    const creep = setInterval(() => {
      setProgress((p) => (p < 65 ? p + 0.3 : p));
    }, 600);
    return () => { clearTimeout(timer); clearInterval(creep); };
  }, []);

  // Rotate insights
  const rotateInsight = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setInsightIndex((i) => (i + 1) % insights.length);
      setIsVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateInsight, 4000);
    return () => clearInterval(interval);
  }, [rotateInsight]);

  const current = insights[insightIndex];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-xl space-y-14">
        {/* Section 1: Analysis preview */}
        <div className="space-y-8">
          <div className="animate-fade-in">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Analyzing your responses
            </p>
            <h1
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              FINDING CAREERS{" "}
              <span className="text-primary">BUILT FOR YOU</span>
            </h1>
          </div>

          {/* Progress bar */}
          <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${progress}%`,
                  background: "var(--gradient-progress)",
                }}
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground tabular-nums">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Rotating insight */}
          <div
            className="rounded-xl border-l-4 border-l-primary border border-border bg-card p-6 min-h-[120px] transition-all duration-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-8px)",
            }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
              {current.emoji} {current.title}
            </p>
            <p className="text-[15px] leading-relaxed text-card-foreground">
              {current.text}
            </p>
          </div>
        </div>

        {/* Section 2: CTA */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-center text-muted-foreground text-sm">
            Your results are ready when you are.
          </p>
          <button className="w-full rounded-xl bg-primary text-primary-foreground font-semibold text-base py-4 hover:opacity-90 transition-opacity tracking-wide cursor-pointer">
            UNLOCK YOUR RESULTS
          </button>
          <p className="text-center text-xs text-muted-foreground leading-relaxed">
            Free. No paywalls. We never sell your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;

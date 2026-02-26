import VerticalProgress from "@/components/VerticalProgress";
import InsightCard from "@/components/InsightCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-3xl space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            GENERATING YOUR{" "}
            <span className="text-primary">PERSONALIZED CAREER PACKAGE</span>
          </h1>
        </div>

        {/* Main content: timeline + insight card side by side */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left: Vertical progress + CTA */}
          <div className="flex-1 space-y-8">
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <VerticalProgress />
            </div>

            <button className="w-full rounded-xl bg-primary text-primary-foreground font-semibold text-base py-4 hover:opacity-90 transition-opacity tracking-wide uppercase">
              Create your free account now
            </button>

            <p className="text-center text-xs text-muted-foreground leading-relaxed">
              Free. No paywalls. We never sell your data.
            </p>
          </div>

          {/* Right: Insight card */}
          <div className="flex-1">
            <InsightCard
              emoji="🌊"
              title="What motivates you"
              description="In every trade-off question, you chose impact over income. Your matches skew toward mission-driven roles."
              active
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

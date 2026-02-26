import ProgressTimeline from "@/components/ProgressTimeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-xl space-y-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Analyzing your responses
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.1]">
            Generating your personalized{" "}
            <span className="text-primary">career package</span>
          </h1>
        </div>

        {/* Vertical Progress Timeline */}
        <ProgressTimeline />

        {/* CTA */}
        <div className="text-center space-y-4">
          <button className="w-full rounded-xl bg-primary text-primary-foreground font-semibold text-base py-4 hover:opacity-90 transition-opacity tracking-wide">
            CREATE YOUR FREE ACCOUNT NOW
          </button>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Free. No paywalls. We never sell your data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

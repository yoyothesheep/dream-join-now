import VerticalProgress from "@/components/VerticalProgress";

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

        {/* Main content: single column */}
        <div className="space-y-8">
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
      </div>
    </div>
  );
};

export default Index;

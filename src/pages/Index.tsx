import ProgressBar from "@/components/ProgressBar";
import InsightCard from "@/components/InsightCard";
import CarouselDots from "@/components/CarouselDots";
import CTACard from "@/components/CTACard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-2xl space-y-10">
        {/* Header */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Analyzing your responses
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            FINDING CAREERS{" "}
            <span className="text-primary">BUILT FOR YOU</span>
          </h1>
        </div>

        {/* Progress */}
        <ProgressBar value={50} />

        {/* Insights */}
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground text-center">
            While we work — a peek at what we found
          </p>

          <InsightCard
            emoji="🌊"
            title="What motivates you"
            description="In every trade-off question, you chose impact over income. Your matches skew toward mission-driven roles."
            active
          />

          <CarouselDots total={5} active={0} />
        </div>

        {/* Combined CTA */}
        <CTACard />
      </div>
    </div>
  );
};

export default Index;

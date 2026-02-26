import { Check } from "lucide-react";

const benefits = [
  "25 matched careers",
  "Training programs",
  "Clear salary and growth outlook",
  "Funding you may qualify for",
];

const CTACard = () => {
  return (
    <div className="rounded-2xl border bg-card p-8 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-bold tracking-tight text-card-foreground">
          <span className="mr-1.5">📦</span> YOUR CAREER PACKAGE IS READY
        </h3>
        <p className="text-muted-foreground mt-1 text-[15px]">
          Sign up now to unlock your personalized career package.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
        {benefits.map((b) => (
          <div key={b} className="flex items-center gap-2 text-sm text-card-foreground">
            <Check className="w-4 h-4 text-primary shrink-0" />
            {b}
          </div>
        ))}
      </div>

      <button className="w-full rounded-xl bg-primary text-primary-foreground font-semibold text-base py-4 hover:opacity-90 transition-opacity tracking-wide">
        CREATE FREE ACCOUNT
      </button>

      <p className="text-center text-xs text-muted-foreground mt-4 leading-relaxed">
        Free. No paywalls. We never sell your data.
        <br />
        Confident career decisions, all in one place.
      </p>
    </div>
  );
};

export default CTACard;

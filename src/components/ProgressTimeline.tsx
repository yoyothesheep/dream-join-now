import { Check, Loader2, Lock } from "lucide-react";

interface Step {
  label: string;
  description: string;
  status: "done" | "in-progress" | "not-done";
}

const steps: Step[] = [
  {
    label: "Step 1",
    description: "Career quiz",
    status: "done",
  },
  {
    label: "Step 2",
    description: "Generating your career package",
    status: "in-progress",
  },
  {
    label: "Step 3",
    description: "Sign up & qualify for financial support",
    status: "not-done",
  },
];

const statusIcon = (status: Step["status"]) => {
  switch (status) {
    case "done":
      return (
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
          <Check className="w-5 h-5 text-primary-foreground" />
        </div>
      );
    case "in-progress":
      return (
        <div className="w-10 h-10 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center shrink-0">
          <Loader2 className="w-5 h-5 text-primary animate-spin" />
        </div>
      );
    case "not-done":
      return (
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
          <Lock className="w-4 h-4 text-muted-foreground" />
        </div>
      );
  }
};

const ProgressTimeline = () => {
  return (
    <div className="rounded-2xl border bg-card p-8 shadow-sm">
      <div className="space-y-0">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            {/* Icon + connector line */}
            <div className="flex flex-col items-center">
              {statusIcon(step.status)}
              {i < steps.length - 1 && (
                <div
                  className={`w-0.5 flex-1 my-1 min-h-[32px] ${
                    step.status === "done" ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>

            {/* Text */}
            <div className={`pt-2 pb-6 ${step.status === "not-done" ? "opacity-50" : ""}`}>
              <p className="text-sm font-bold tracking-wide text-card-foreground">
                {step.label}
              </p>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTimeline;

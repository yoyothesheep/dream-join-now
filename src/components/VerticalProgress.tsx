import { Check, Loader2, Lock } from "lucide-react";

interface Step {
  label: string;
  status: "done" | "in-progress" | "not-done";
}

const steps: Step[] = [
  { label: "Career quiz", status: "done" },
  { label: "Generating your career package", status: "in-progress" },
  { label: "Sign up and qualify for financial support", status: "not-done" },
];

const statusIcon = (status: Step["status"]) => {
  switch (status) {
    case "done":
      return (
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
          <Check className="w-4 h-4 text-primary-foreground" />
        </div>
      );
    case "in-progress":
      return (
        <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0">
          <Loader2 className="w-4 h-4 text-primary animate-spin" />
        </div>
      );
    case "not-done":
      return (
        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
          <Lock className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
      );
  }
};

const VerticalProgress = () => {
  return (
    <div className="flex flex-col">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-start gap-4">
          {/* Icon + connector line */}
          <div className="flex flex-col items-center">
            {statusIcon(step.status)}
            {i < steps.length - 1 && (
              <div
                className={`w-0.5 h-10 ${
                  step.status === "done" ? "bg-primary" : "bg-muted"
                }`}
              />
            )}
          </div>

          {/* Text */}
          <div className="pt-1">
            <p
              className={`text-sm font-semibold uppercase tracking-wide ${
                step.status === "done"
                  ? "text-primary"
                  : step.status === "in-progress"
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Step {i + 1}
            </p>
            <p
              className={`text-[15px] leading-relaxed ${
                step.status === "not-done"
                  ? "text-muted-foreground"
                  : "text-card-foreground"
              }`}
            >
              {step.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalProgress;

import { Check, Loader2, Lock } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

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
        <div key={step.label}>
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              {statusIcon(step.status)}
              {i < steps.length - 1 && (
                <div
                  className={`w-0.5 ${
                    step.status === "in-progress" ? "h-6" : "h-10"
                  } ${step.status === "done" ? "bg-primary" : "bg-muted"}`}
                />
              )}
            </div>

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

          {/* Streaming results preview beneath step 2 */}
          {step.status === "in-progress" && (
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 shrink-0" />
                {i < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-muted" />
                )}
              </div>
              <div className="w-full max-w-sm animate-in fade-in duration-700 pb-3">
                {/* Skeleton result card — data streaming in */}
                <div className="rounded-lg bg-muted p-4 space-y-3 border border-border">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-3.5 w-28" />
                  </div>
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-4/5" />

                  {/* Partially "resolved" insight row */}
                  <div className="pt-2 border-t border-border/40 mt-2 space-y-2 animate-in fade-in duration-1000 delay-500">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      <span className="mr-1">🌊</span>
                      What motivates you
                    </p>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      You chose impact over income. Your matches skew toward
                      mission-driven roles.
                    </p>
                  </div>

                  {/* More skeleton rows still loading */}
                  <div className="pt-2 border-t border-border/40 space-y-2">
                    <Skeleton className="h-3 w-24" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-3/5" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalProgress;
interface InsightCardProps {
  emoji: string;
  title: string;
  description: string;
  active?: boolean;
}

const InsightCard = ({ emoji, title, description, active = false }: InsightCardProps) => {
  return (
    <div
      className={`rounded-xl border bg-card p-6 transition-all ${
        active ? 'border-l-4 border-l-primary shadow-md' : 'border-border opacity-50 scale-95'
      }`}
    >
      <h3 className="text-sm font-semibold tracking-wide uppercase mb-2 text-card-foreground">
        <span className="mr-1.5">{emoji}</span>
        {title}
      </h3>
      <p className="text-muted-foreground text-[15px] leading-relaxed">{description}</p>
    </div>
  );
};

export default InsightCard;

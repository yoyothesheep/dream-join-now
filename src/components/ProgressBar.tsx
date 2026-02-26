const ProgressBar = ({ value = 50 }: { value?: number }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${value}%`,
            background: 'var(--gradient-progress)',
          }}
        />
      </div>
      <span className="text-sm font-medium text-muted-foreground">{value}%</span>
    </div>
  );
};

export default ProgressBar;

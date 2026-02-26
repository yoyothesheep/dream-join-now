const CarouselDots = ({ total = 5, active = 0 }: { total?: number; active?: number }) => {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all ${
            i === active
              ? 'w-2.5 h-2.5 bg-primary'
              : 'w-2 h-2 bg-muted-foreground/30'
          }`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;

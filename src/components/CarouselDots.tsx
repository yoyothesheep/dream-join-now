import { Box } from "@mui/material";

const CarouselDots = ({ total = 5, active = 0 }: { total?: number; active?: number }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
      {Array.from({ length: total }).map((_, i) => (
        <Box
          key={i}
          sx={{
            borderRadius: "50%",
            transition: "all 0.3s ease",
            ...(i === active
              ? {
                width: 10,
                height: 10,
                bgcolor: "primary.main",
              }
              : {
                width: 8,
                height: 8,
                bgcolor: "text.disabled",
                opacity: 0.5,
              }),
          }}
        />
      ))}
    </Box>
  );
};

export default CarouselDots;


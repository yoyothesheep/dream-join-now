import { ThemeProvider, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Agentation } from "agentation";
import Index from "./pages/Index";
import Stepper from "./pages/Stepper";
import FindingCareers from "./pages/FindingCareers";
import MatchMeResults from "./pages/MatchMeResults";
import NotFound from "./pages/NotFound";
import { lightTheme } from "./theme";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/stepper" element={<Stepper />} />
          <Route path="/finding-careers" element={<FindingCareers />} />
          <Route path="/match-me-results" element={<MatchMeResults />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    {import.meta.env.DEV && <Agentation />}
  </ThemeProvider>
);

export default App;

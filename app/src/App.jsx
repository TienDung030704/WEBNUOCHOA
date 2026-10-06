import AppRoutes from "@/components/AppRouter";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { useLocation } from "react-router-dom";
import { Toaster } from "sonner";

function App() {
  const location = useLocation();

  return (
    <>
      <Toaster richColors position="top-right" />
      <AppRoutes />
      <FloatingContactButtons key={location.pathname} />
    </>
  );
}

export default App;

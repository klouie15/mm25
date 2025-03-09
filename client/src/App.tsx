import Landing from "./pages/Landing.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

function App() {

  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Landing />
      </ThemeProvider>
  )
}

export default App

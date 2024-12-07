import "./App.css";
import Home from "./Pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Home mode={mode} setMode={setMode} />
      </ThemeProvider>
    </>
  );
}

export default App;

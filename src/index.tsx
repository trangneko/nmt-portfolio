import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from "./App";
import theme from "./theme";
import './index.css';
import { SpeedInsights } from "@vercel/speed-insights/react"

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <ThemeProvider theme={theme}>
  <CssBaseline />
  <BrowserRouter>
    <App />
    <SpeedInsights />
  </BrowserRouter>
</ThemeProvider>
);

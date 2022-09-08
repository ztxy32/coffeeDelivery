import { ThemeProvider } from "styled-components";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Checkout/>
    </ThemeProvider>
  )
}


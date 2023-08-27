import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme  from '../src/theme/index'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <BrowserRouter initialEntries={['/']}>
      <ThemeProvider theme={theme}>
      <Story />
      </ThemeProvider>
    </BrowserRouter>
  )
]

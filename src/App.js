import { Home } from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./redux/store";
import theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

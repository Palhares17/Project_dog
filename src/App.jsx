import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />

        <GlobalStyle /> {/* GlobalStyle é um componente que contém o estilo global da aplicação */}

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

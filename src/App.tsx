
import './App.css'
import { FooterBar } from './components/FooterBar';
import { HeaderBar } from "./components/HeaderBar";
import { MainNavBar } from './components/MainNavBar';
import AppRoutes from "./routes/AppRoutes";

function App() {

  return (
    <>
      <HeaderBar />
      <MainNavBar />
      <AppRoutes />
      <FooterBar />
    </>
  );
}

export default App

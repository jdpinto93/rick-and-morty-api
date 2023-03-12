import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componets/Header';
import Chracter from './pages/Chracters';
import HomeApp from './pages/Home';
import ChracterU from "./pages/ChracterU";
import Footer from './componets/Footer';
import Container from '@mui/material/Container';

function App () {
  return (
   <>
    <Header />

    <Container maxWidth="xl">
          <Routes>
            <Route exact path="/" element={<HomeApp />} />
            <Route path="/characters" element={<Chracter />} />
            <Route path="/character/:id" element={<ChracterU />} />
          </Routes>    
    </Container>

    <Footer />

  </>

  );
}
export default App;
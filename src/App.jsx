import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import APropos from './pages/aPropos/APropos';
import NotFound from './pages/notFound/NotFound';
import PageLogement from './pages/pageLogement/PageLogement';
import Logement from './components/logement/Logement';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/apropos' element={<APropos />} />
          <Route path='logement' element={<PageLogement />} />
          <Route path='logement/:productId' element={<Logement />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

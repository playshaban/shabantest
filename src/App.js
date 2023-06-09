import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Services from './components/Services';
import SpecialOffers from './components/SpecialOffers';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Poster">

      </div>
      <Container />
      <SpecialOffers />
      <Services />
      <NewsLetter />
      <Footer />

    </div>
  );
}

export default App;

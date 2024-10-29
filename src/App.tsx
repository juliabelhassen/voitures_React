import ScrollToTop from './assets/Components/ScrollingButton';
import './App.css'
import CarCard from './assets/Components/CarCard'
import carList from './assets/Components/tableau';
import Footer from './assets/Components/Footer';
import Header from './assets/Components/Header';


function App() {
  return (
    <>
      <Header />
      <section className="mainSection">
      {carList.map((props, i) => (
        <CarCard key={i} {...props} />
      ))}
      </section>
        <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;

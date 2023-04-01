import './App.css';
import DeliciousFood from './components/DeliciousFood';
import NavBar from './components/NavBar';

function App() {
  return (
    <section className="px-[9rem]  relative">
      <NavBar />
      <img
        src="/colored-shape.png"
        alt=""
        className="absolute right-0 top-0 -z-10"
      />
      <DeliciousFood />
      <img
        src="/food-chain.png"
        alt=""
        className="absolute right-0 top-0 -z-10"
      />
    </section>
  );
}

export default App;

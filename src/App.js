import { useState } from 'react';
import './App.css';
import DeliciousFood from './components/DeliciousFood';
import NavBar from './components/NavBar';

function App() {
  const [color, setColor] = useState('green');
  return (
    <section className="px-[9rem]  relative">
      <NavBar />
      <img
        src="/colored-shape.png"
        alt=""
        className={`fade-in absolute right-0 top-0 -z-10 ${
          color === 'green' ? '' : 'hidden'
        }`}
      />
      <img
        src="/orange-shape.png"
        alt=""
        className={`fade-in absolute right-0 top-0 -z-10 ${
          color === 'green' ? 'hidden' : ''
        }`}
      />
      <DeliciousFood color={color} setColor={setColor} />
      <img
        src="/food-chain.png"
        alt=""
        className={`absolute right-0 top-0 -z-10 ${
          color === 'green' ? '' : 'hidden'
        }`}
      />
      <img
        src="/food-chain-2.png"
        alt=""
        className={`absolute right-0 top-0 -z-10 rotate ${
          color === 'green' ? 'hidden' : ''
        }`}
      />
    </section>
  );
}

export default App;

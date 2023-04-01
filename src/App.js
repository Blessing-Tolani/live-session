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
      <div className="absolute right-0 top-0 -z-10 ">
        <svg
          width="1005"
          height="430"
          viewBox="0 0 1005 430"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="596"
            cy="460"
            r="280"
            stroke={`${color === 'green' ? '#5CAC0E' : '#F07000'}`}
            stroke-width="2"
            stroke-dasharray="10 20"
          />
        </svg>
        <img
          src={`${color === 'green' ? '/food-1.png' : '/food-2.png'}`}
          className="absolute -bottom-2 left-72"
        />
        <img
          src={`${color === 'green' ? '/food-2.png' : '/food-3.png'}`}
          className="absolute bottom-[140px] left-[380px]"
        />
        <img
          src={`${color === 'green' ? '/food-3.png' : '/food-4.png'}`}
          className="absolute bottom-[210px] left-[540px]"
        />
        <img
          src={`${color === 'green' ? '/food-4.png' : '/food-5.png'}`}
          className="absolute bottom-[140px] right-[200px]"
        />
        <img src="/food-5.png" className="absolute bottom-0.5 right-24" />
      </div>
    </section>
  );
}

export default App;

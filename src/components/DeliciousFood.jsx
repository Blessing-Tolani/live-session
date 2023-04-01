export default function DeliciousFood({ color, setColor }) {
  return (
    <div className="mt-60 grid grid-cols-2">
      <div>
        <p
          className={`fade-in text-[48px] ${
            color === 'green' ? 'text-[#5CAC0E]' : 'text-[#FEA150]'
          } font-medium `}
        >
          Delicious
        </p>
        <p className="text-[#333333] font-medium text-4xl">Quench the Hunger</p>
        <p className="text-sm w-80 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
          ipsum, auctor quis sagittis felis risus, a odio. Amet ante nulla sem
          mauris. Sollicitudin ultrices enim quam.
        </p>
        <button
          className={`fade-in w-[163px] h-[50px] rounded-[48px] text-white mt-[33px] text-sm font-bold ${
            color === 'green' ? 'bg-[#5CAC0E]' : 'bg-[#FEA150]'
          }`}
        >
          <span>Quench Now </span>
        </button>
      </div>
      <div className="flex justify-between items-end">
        <button
          onClick={() => setColor('green')}
          className={`w-10 h-10 ${
            color === 'green' ? 'bg-[#5CAC0E]' : 'bg-[#FEA150]'
          } flex justify-center items-center rounded-full mb-10`}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3137 22.6274L1.00001 11.3137M12.3137 22.6274L23.6274 11.3137M12.3137 22.6274V2.47955e-05"
              stroke="#FFF4F4"
              stroke-width="2"
            />
          </svg>
        </button>

        <img
          src="/food-image-1.png"
          alt=""
          className={`zoom-in ${color === 'green' ? '' : 'hidden'}`}
        />
        <img
          src="/food-image-2.png"
          alt=""
          className={`zoom-in ${color === 'green' ? 'hidden' : ''}`}
        />
        <button
          onClick={() => setColor('orange')}
          className={`w-10 h-10 ${
            color === 'green' ? 'bg-[#5CAC0E]' : 'bg-[#FEA150]'
          } flex justify-center items-center rounded-full mb-10`}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3137 22.6274L1.00001 11.3137M12.3137 22.6274L23.6274 11.3137M12.3137 22.6274V2.47955e-05"
              stroke="#FFF4F4"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function NavBar() {
  return (
    <section className="grid grid-cols-[30%_auto_24px] py-[33px] items-center">
      <div className="flex space-x-3 items-center">
        <svg
          width="21"
          height="13"
          viewBox="0 0 21 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7225 6.50647C17.7225 10.0927 14.4888 13 10.5 13C6.51115 13 3.27755 10.0927 3.27755 6.50647C3.27755 2.92019 -7.68987 0.253439 10.5 0.0129382C28.6899 -0.227563 17.7225 2.92019 17.7225 6.50647Z"
            fill="#5CAC0E"
          />
        </svg>
        <p className="text-lg font-medium text-[#333333]">Food Hunt</p>
      </div>
      <div className="space-x-16 pl-10 text-sm text-[#333333]">
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </div>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
          stroke="#333333"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
          stroke="#333333"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </section>
  );
}

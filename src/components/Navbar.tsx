import bag from "../assets/icons/bag.svg";

export const Navbar = () => {
  return (
    <div className="flex px-6 pt-6 text-white items-center">
      {/* Mobile view hamburger */}
      <div className="md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      {/* Desktop view brand */}
      <a href="" className="hidden md:flex flex-none text-2xl">
        Panto
      </a>
      {/* Desktop view navbar */}
      <div className="hidden grow md:flex justify-center text-sm items-center">
        <a href="" className="w-32 text-center">
          Furniture
        </a>
        <a href="" className="w-32 text-center">
          Shop
        </a>
        <a href="" className="w-32 text-center">
          About Us
        </a>
        <a href="" className="w-32 text-center">
          Contact
        </a>
      </div>
      <a href="" className="flex-none">
        <img className="w-6 h-6" src={bag} alt="Bag Logo" />
      </a>
    </div>
  );
};

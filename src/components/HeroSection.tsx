import search from "../assets/icons/search.svg";

export const HeroSection = () => {
  return (
    <div className="hero-section h-full px-8 flex flex-col justify-start items-center mt-16">
      <h1 className="text-white text-7xl text-center max-w-4xl">
        Make your interior more minimalistic & modern
      </h1>
      <p className="text-white text-center mt-8 max-w-md">
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </p>
      <div className="rounded-lg border border-white p-2 backdrop-blur-sm bg-gray/30 flex items-center mt-8">
        <input
          type="text"
          placeholder="Search furniture"
          className="focus:outline-none placeholder-white"
        />
        <img src={search} alt="Search icon" className="h-6 w-6" />
      </div>
    </div>
  );
};

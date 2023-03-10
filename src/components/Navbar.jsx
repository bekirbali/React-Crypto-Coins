import React from "react";

const Navbar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-between bg-black/50 text-white p-2 items-center w-full">
      <div className="flex items-center gap-2 px-2 ">
        <img
          width="50px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
          alt=""
        />
        <h1 className="font-bold text-xl">Crypto Coins</h1>
      </div>
      <form className="search" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
          className="enabled:hover:border-green-500 invalid:border-red-500 valid:border-green-500 rounded-md p-1 text-black outline-none capitalize mx-2"
          type="search"
          placeholder="Search for a coin..."
          name="search"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Navbar;

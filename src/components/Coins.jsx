import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

const Coins = ({ coins, search }) => {
  const filtered = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filtered);
  return (
    <>
      <table className="table table-striped text-center table-nav">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th className="hidden md:table-cell">Market Cap</th>
            <th className="hidden md:table-cell">Volume</th>
            <th>Price Change</th>
          </tr>
        </thead>

        <tbody>
          {search ? (
            !filtered.length ? (
              <h1 className="text-center text-xl text-red-700">
                No Coin with this name!!
              </h1>
            ) : (
              coins
                .filter((coin) =>
                  coin.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((coin, index) => {
                  const {
                    id,
                    name,
                    image,
                    current_price,
                    market_cap,
                    price_change_percentage_24h,
                    total_volume,
                  } = coin;
                  return (
                    <tr key={id}>
                      <td className="align-middle">{index + 1}</td>
                      <td className="flex flex-col gap-1 sm:flex-row items-center justify-center m-auto">
                        <img className="w-8" src={image} alt={id} />
                        <span className="w-24 text-sm">{name}</span>
                      </td>
                      <td className="align-middle">{current_price}</td>
                      <td className="hidden md:table-cell align-middle">
                        {market_cap}
                      </td>
                      <td className="hidden md:table-cell align-middle">
                        {total_volume}
                      </td>
                      <td className="align-middle">
                        {price_change_percentage_24h}%
                      </td>
                    </tr>
                  );
                })
            )
          ) : (
            coins
              ?.sort((a, b) => b.current_price - a.current_price)
              .map((coin, index) => {
                const {
                  id,
                  name,
                  image,
                  current_price,
                  market_cap,
                  price_change_percentage_24h,
                  total_volume,
                } = coin;
                return (
                  <tr key={id}>
                    <td className="align-middle">{index + 1}</td>
                    <td className="flex flex-col sm:flex-row items-center justify-center m-auto">
                      <img width="50px" src={image} alt={id} />
                      <span className="w-24">{name}</span>
                    </td>
                    <td className="align-middle">{current_price}</td>
                    <td className="hidden md:table-cell align-middle">
                      {market_cap}
                    </td>
                    <td className="hidden md:table-cell align-middle">
                      {total_volume}
                    </td>
                    <td className="align-middle">
                      {price_change_percentage_24h}%
                    </td>
                  </tr>
                );
              })
          )}
        </tbody>
      </table>
    </>
  );
};

export default Coins;

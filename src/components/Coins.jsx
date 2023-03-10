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
            <th>Market Cap</th>
            <th>Volume</th>
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
                      <td>{index + 1}</td>
                      <td className="flex items-center justify-center gap-1">
                        <img width="50px" src={image} alt={id} />
                        <span className="w-48">{name}</span>
                      </td>
                      <td>{current_price}</td>
                      <td>{market_cap}</td>
                      <td>{total_volume}</td>
                      <td>{price_change_percentage_24h}</td>
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
                    <td>{index + 1}</td>
                    <td className="flex items-center justify-center gap-1">
                      <img width="50px" src={image} alt={id} />
                      <span className="w-48">{name}</span>
                    </td>
                    <td>{current_price}</td>
                    <td>{market_cap}</td>
                    <td>{total_volume}</td>
                    <td>{price_change_percentage_24h}</td>
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

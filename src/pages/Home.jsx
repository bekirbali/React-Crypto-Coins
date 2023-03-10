import React, { useEffect, useState } from "react";
import axios from "axios";
import Coins from "../components/Coins";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [page, setPage] = useState(1);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const getCoins = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
    );
    setCoins(data);
  };
  useEffect(() => {
    getCoins();
    setTimeout(() => {
      setLoading(false);
    }, 500);
    window.scrollTo(0, 0);
  }, [page]);

  const notify = () => {
    toast.warn("You are already on the first page");
  };

  const previousPageHandler = () => {
    page - 1 ? setPage(page - 1) : notify();
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <Navbar search={search} setSearch={setSearch} />
      {loading ? (
        <h1 className="text-center text-xl font-bold">LOADING...</h1>
      ) : (
        <>
          <Coins setPage={setPage} coins={coins} search={search} />
          <div className="text-center flex flex-col gap-2 items-center md:flex-row md:justify-center ">
            <button
              className="btn btn-primary w-48 md:mr-2 "
              onClick={previousPageHandler}
            >
              Previous Page
            </button>
            <button
              className="btn btn-success w-48"
              onClick={() => setPage(page + 1)}
            >
              Next Page
            </button>
          </div>{" "}
        </>
      )}
      <Footer />
    </>
  );
};

export default Home;

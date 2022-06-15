import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoState } from "../CrypoContext";
import { SingleCoin } from "../config/api";
import axios from "axios";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  return <h1>CoinPage</h1>;
};

export default CoinPage;

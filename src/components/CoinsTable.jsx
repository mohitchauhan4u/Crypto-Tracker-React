import React, { useState } from "react";
import axios from "axios";
import { CoinList } from "../config/api";
import { CryptoState } from "../CrypoContext";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currency } = CryptoState;

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  return <div>CoinsTable</div>;
};

export default CoinsTable;

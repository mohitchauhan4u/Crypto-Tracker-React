import React, { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import { CryptoState } from "../CryptoContext";
import axios from "axios";

const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState();
  const [flag, setflag] = useState(false);

  const { currency } = CryptoState();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setflag(true);
    setHistoricalData(data.prices);
  };

  console.log(coin);

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return <div>CoinInfo</div>;
};

export default CoinInfo;

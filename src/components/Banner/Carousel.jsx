import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import { TrendingCoins } from "../../config/api";

const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

const Carousel = () => {
  const classes = useStyles();
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins());
  };
  return <div className={classes.carousel}>Carousel</div>;
};

export default Carousel;

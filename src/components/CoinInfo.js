import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { HistoricalChart } from "../config/api";
import { CryptoState } from "../CrypotoContext";

const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState([]);
  const [days, setDays] = useState(1);

  const { currency } = CryptoState();

  const fetchHistoricalData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setHistoricalData(data.prices);
  };
  console.log(historicalData);

  useEffect(() => {
    fetchHistoricalData();
  }, [currency, days]);
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  const useStyles = makeStyles((theme) => ({
    conatiner: {
      width: "75%",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));
  //   const labelData =
  //     historicalData.length > 0 ? <p>Loading...</p> :
  // historicalData.map((coin) => {
  //   let date = new Date(coin[0]);
  //   let time =
  //     date.getHours() > 12
  //       ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
  //       : `${date.getHours() - 12} : ${date.getMinutes()} AM`;

  //   return days === 1 ? time : date.toLocaleDateString();
  // });
  const classes = useStyles();
  //   const data = {
  //     labels: labelData,
  //     datasets: [{ data: historicalData.map((coin) => coin[1]) }],
  //   };
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historicalData ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
                      : `${date.getHours() - 12} : ${date.getMinutes()} AM`;

                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [{ data: historicalData.map((coin) => coin[1]) }],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;

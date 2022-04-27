import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useQuery } from 'react-query';
import { fetchHistoricalData } from '../../api/crypto_compare/historicalData';

const InitialOptions = {
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    row: {
      colors: undefined,
      opacity: 0.5,
    },
    padding: {
      top: 0,
      bottom: 0,
    },
  },
  chart: {
    height: 100,
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
    type: 'line',
  },

  stroke: {
    width: 5,
    curve: 'smooth',
  },

  xaxis: {
    categories: new Array(25).fill().map((i, index) => {
      if (index < 23) return `${24 - index} hours ago`;
      if (index === 23) return `${24 - index} hour ago`;
      return `Now`;
    }),
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
    },
  },
  fill: {
    type: 'gradient',
    // colors: ["#4B24DC"],
    gradient: {
      shade: 'light',
      // gradientToColors: ["#ECB533"],
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 0,
      opacityTo: 1,
      // colorStops: [
      //   {
      //     offset: 0,
      //     color: "#4B24DC",
      //     opacity: 0.1,
      //   },
      //   {
      //     offset: 100,
      //     color: "#48BB78",
      //     opacity: 1,
      //   },
      // ],
    },
  },
  yaxis: {
    show: false,
    labels: {
      show: false,
    },
  },
};

const ApexChart = () => {
  const [series, setSeries] = useState([]);
  const [dayChange, setDayChange] = useState(0);
  const [options, setOptions] = useState(InitialOptions);

  const { isLoading, error, data, isFetching } = useQuery('prices', () => fetchHistoricalData('AVAX', 24));

  useEffect(() => {
    const prices = data?.Data?.Data;
    if (!prices?.length) return;
    const percent = prices[24].open / prices[0].open;
    console.log(percent, prices);
    if (percent >= 1.02) {
      setDayChange(1);
    } else if (percent <= 0.98) {
      setDayChange(-1);
    } else {
      setDayChange(0);
    }
    setSeries(prices?.map((item) => item.open));
  }, data);

  useEffect(() => {
    const newOptions = { ...InitialOptions };
    console.log(dayChange);
    let color = dayChange === 0 ? '#ECB533' : dayChange === 1 ? '#48BB78' : '#DE383D';
    newOptions.fill.gradient.colorStops = [
      {
        offset: 0,
        color: '#4B24DC',
        opacity: 0.1,
      },
      {
        offset: 100,
        color: color,
        opacity: 1,
      },
    ];
    setOptions(newOptions);
  }, [dayChange]);

  if (isLoading || isFetching) return null;
  return <Chart options={options} series={[{ name: 'Price', data: series }]} height="100%" />;
};

export default ApexChart;
